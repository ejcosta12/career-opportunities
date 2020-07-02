import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '../config/auth';

import AppError from '../errors/AppErros';

interface RequestQuery {
  idToken?: string;
}

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;
  const { idToken } = request.query as RequestQuery;

  if (!authHeader || !idToken) {
    throw new AppError('JWT token is missing');
  }

  const [, token] = authHeader.split(' ');
  try {
    verify(token, authConfig.jwt.secret, {
      jwtid: idToken,
    });
    return next();
  } catch {
    throw new AppError('Invalid JWT token');
  }
}
