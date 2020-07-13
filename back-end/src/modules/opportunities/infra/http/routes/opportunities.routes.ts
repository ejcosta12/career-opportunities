import { Router } from 'express';

import ListOpportunitiesLocationsService from '@modules/opportunities/services/ListOpportunitiesLocationsService';
import CreateOpportunityService from '@modules/opportunities/services/CreateOpportunityService';
import DeleteOpportunityService from '@modules/opportunities/services/DeleteOpportunityService';

import ensureAuthenticated from '@modules/visitors/infra/http/middlewares/ensureAuthenticated';

const opportunitiesRouter = Router();

opportunitiesRouter.use(ensureAuthenticated);

opportunitiesRouter.get('/', async (request, response) => {
  const listOpportunitiesLocationsService = new ListOpportunitiesLocationsService();
  const opportunities = await listOpportunitiesLocationsService.execute();
  return response.json(opportunities);
});

opportunitiesRouter.post('/', async (request, response) => {
  const {
    name,
    description,
    local,
    quantity,
  } = request.body;
  const createOpportunityService = new CreateOpportunityService();
  const opportunity = await createOpportunityService.execute({
    name,
    description,
    local,
    quantity,
  });
  return response.json(opportunity);
});

opportunitiesRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteOpportunityService = new DeleteOpportunityService();
  await deleteOpportunityService.execute(id);
  return response.status(204).send();
});

export default opportunitiesRouter;
