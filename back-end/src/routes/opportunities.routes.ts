import { Router } from 'express';

import ListOpportunitiesLocationsService from '../services/ListOpportunitiesLocationsService';
import CreateOpportunitiesService from '../services/CreateOpportunitiesService';

const opportunitiesRouter = Router();

opportunitiesRouter.get('/', async (request, response) => {
  const listOpportunitiesLocationsService = new ListOpportunitiesLocationsService();
  const opportunities = listOpportunitiesLocationsService.execute();
  return response.json(opportunities);
});

opportunitiesRouter.post('/', async (request, response) => {
  const { name, description, local } = request.body;
  const createOpportunitiesService = new CreateOpportunitiesService();
  const opportunitie = createOpportunitiesService.execute({ name, description, local });
  return response.json(opportunitie);
});

export default opportunitiesRouter;
