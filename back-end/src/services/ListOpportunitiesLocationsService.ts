import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

class ListOpportunitiesLocationsService {
  public async execute(): Promise<Opportunities[]> {
    const opportunitiesRepository = getRepository(Opportunities);

    const listOpportunities = await opportunitiesRepository.find();

    return listOpportunities;
  }
}

export default ListOpportunitiesLocationsService;
