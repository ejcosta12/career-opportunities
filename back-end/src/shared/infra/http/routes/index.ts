import { Router } from 'express';

import opportunitiesRouter from '@modules/opportunities/infra/http/routes/opportunities.routes';
import sessionsRouter from '@modules/visitors/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/opportunities', opportunitiesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
