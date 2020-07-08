import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';

import Visitors from '@modules/visitors/infra/typeorm/entities/Visitors';

import AppError from '@shared/errors/AppErros';

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

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      jwtid: idVisitor,
      subject: email,
      expiresIn,
    });

    return {
      ...visitor,
      token,
      idVisitor,
    };
  }
}

export default CreateVisitorService;
