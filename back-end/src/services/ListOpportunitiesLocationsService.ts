import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

class ListOpportunitiesLocationsService {
  public async execute(): Promise<Opportunities[]> {
    const opportunities = getRepository(Opportunities);

    const listOpportunities = opportunities.find();

    return listOpportunities;
  }
}

export default ListOpportunitiesLocationsService;
