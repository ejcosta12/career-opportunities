import { Router } from 'express';

import ListOpportunitiesLocationsService from '../services/ListOpportunitiesLocationsService';
import CreateOpportunityService from '../services/CreateOpportunityService';
import DeleteOpportunityService from '../services/DeleteOpportunityService';

const opportunitiesRouter = Router();

opportunitiesRouter.get('/', async (request, response) => {
  const listOpportunitiesLocationsService = new ListOpportunitiesLocationsService();
  const opportunities = await listOpportunitiesLocationsService.execute();
  return response.json(opportunities);
});

opportunitiesRouter.post('/', async (request, response) => {
  const { name, description, local } = request.body;
  const createOpportunityService = new CreateOpportunityService();
  const opportunity = await createOpportunityService.execute({ name, description, local });
  return response.json(opportunity);
});

opportunitiesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteOpportunityService = new DeleteOpportunityService();
  await deleteOpportunityService.execute(id);
  return response.status(204).send();
});

export default opportunitiesRouter;
