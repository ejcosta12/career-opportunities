import { Router } from 'express';

import ListOpportunitiesLocationsService from '../services/ListOpportunitiesLocationsService';

const opportunitiesRouter = Router();

opportunitiesRouter.get('/', async (request, response) => {
  const listOpportunitiesLocationsService = new ListOpportunitiesLocationsService();
  const opportunities = listOpportunitiesLocationsService.execute();
  return response.json(opportunities);
});

export default opportunitiesRouter;
