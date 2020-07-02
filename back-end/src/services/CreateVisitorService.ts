import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import Visitors from '../models/Visitors';

import AppError from '../errors/AppErros';

interface Request {
  name: string;
  email: string;
}
interface Response {
  name: string;
  email: string;
  token: string;
  idVisitor: string;
}

class CreateVisitorService {
  public async execute({ name, email }: Request): Promise<Response> {
    if (!name || !email) {
      throw new AppError('Name or Email is not filled', 400);
    }
    const visitorsRepository = getRepository(Visitors);

    const visitor = visitorsRepository.create({ name, email });
    const idVisitor = String(Math.floor(Math.random() * 99999 + 1978));

    const token = sign({}, '0132bcf807c46e82b3ba0371f0a8305c', {
      jwtid: idVisitor,
      subject: email,
      expiresIn: '1h',
    });

    return {
      ...visitor,
      token,
      idVisitor,
    };
  }
}

export default CreateVisitorService;
