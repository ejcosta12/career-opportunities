import { Router } from 'express';

import opportunitiesRouter from './opportunities.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/opportunities', opportunitiesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
