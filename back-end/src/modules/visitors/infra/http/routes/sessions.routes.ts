import { Router } from 'express';

import CreateVisitorService from '@modules/visitors/services/CreateVisitorService';
import SaveVisitorService from '@modules/visitors/services/SaveVisitorService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { name, email } = request.body;
  const createVisitorService = new CreateVisitorService();
  const visitor = await createVisitorService.execute({ name, email });
  return response.json(visitor);
});

sessionsRouter.post('/login', async (request, response) => {
  const authHeader = request.headers.authorization;
  const { name, email, id } = request.body;
  const saveVisitorService = new SaveVisitorService();
  const visitor = await saveVisitorService.execute({
    name,
    email,
    authHeader,
    id,
  });
  return response.json(visitor);
});

export default sessionsRouter;
