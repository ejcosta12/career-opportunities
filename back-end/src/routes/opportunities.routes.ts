import { Router } from 'express';

const opportunitiesRouter = Router();

opportunitiesRouter.get('/', async (request, response) => {
  return response.json('opportunities');
});

export default opportunitiesRouter;
