import { Router } from 'express';

import opportunitiesRouter from './opportunities.routes';

const routes = Router();

routes.use('/opportunities', opportunitiesRouter);

export default routes;
