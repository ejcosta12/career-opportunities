import { getRepository } from 'typeorm';
import { verify } from 'jsonwebtoken';

import Visitors from '../models/Visitors';

import AppError from '../errors/AppErros';

interface Request {
  name: string;
  email: string;
  token: string;
  id: string;
}

class CreateOpportunityService {
  public async execute({
    name,
    email,
    token,
    id,
  }: Request): Promise<Visitors | undefined> {
    if (!id || !name || !email) {
      throw new AppError('Token or Email or Name is not filled', 400);
    }
    try {
      const verifyToken = verify(token, '0132bcf807c46e82b3ba0371f0a8305c', {
        subject: email,
        jwtid: id,
      });
      if (verifyToken) {
        const visitorsRepository = getRepository(Visitors);
        const visitorRegistred = await visitorsRepository.findOne({ where: { email } });
        if (visitorRegistred) {
          await visitorsRepository.update({ email }, { name, email });
          return visitorRegistred;
        }
        const visitor = visitorsRepository.create({ name, email });
        await visitorsRepository.save(visitor);
        return visitor;
      }
    } catch {
      throw new AppError('Invalid Token', 400);
    }

    return undefined;
  }
}

export default CreateOpportunityService;
