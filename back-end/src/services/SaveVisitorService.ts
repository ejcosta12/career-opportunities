import { getRepository } from 'typeorm';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import Visitors from '../models/Visitors';

import AppError from '../errors/AppErros';

interface Request {
  name: string;
  email: string;
  authHeader?: string;
  id: string;
}

class SaveVisitorService {
  public async execute({
    name,
    email,
    authHeader,
    id,
  }: Request): Promise<Visitors | undefined> {
    if (!id || !name || !email) {
      throw new AppError('Token or Email or Name is not filled', 400);
    }
    try {
      if (authHeader) {
        const [, token] = authHeader.split(' ');
        const verifyToken = verify(token, authConfig.jwt.secret, {
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
      }
    } catch {
      throw new AppError('Invalid Token', 400);
    }

    return undefined;
  }
}

export default SaveVisitorService;
