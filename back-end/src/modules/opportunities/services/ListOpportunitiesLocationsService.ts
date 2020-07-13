import { getRepository } from 'typeorm';

import Opportunities from '@modules/opportunities/infra/typeorm/entities/Opportunities';

interface newOpportunities {
  local: string;
  opportunities: Opportunities[];
}

class ListOpportunitiesLocationsService {
  public async execute(): Promise<newOpportunities[]> {
    const opportunitiesRepository = getRepository(Opportunities);

    const listOpportunities = await opportunitiesRepository.find();
    const locations = listOpportunities.map(({ local }) => local)
      .filter((local, index, locals) => (
        locals.indexOf(local) === index
      ));
    const newListOpportunities = locations.map((local) => ({
      local,
      opportunities: listOpportunities.filter((value) => value.local === local),
    }));

    return newListOpportunities;
  }
}

export default ListOpportunitiesLocationsService;
