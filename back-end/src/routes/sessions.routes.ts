import { Router } from 'express';

import CreateVisitorService from '../services/CreateVisitorService';
import AuthenticateVisitorService from '../services/AuthenticateVisitorService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { name, email } = request.body;
  const createVisitorService = new CreateVisitorService();
  const visitor = await createVisitorService.execute({ name, email });
  return response.json(visitor);
});

sessionsRouter.post('/:token', async (request, response) => {
  const { token } = request.params;
  const { name, email, id } = request.body;
  const authenticateVisitorService = new AuthenticateVisitorService();
  const visitor = await authenticateVisitorService.execute({
    name,
    email,
    token,
    id,
  });
  return response.json(visitor);
});

export default sessionsRouter;
