import { getRepository } from 'typeorm';

import Opportunities from '@modules/opportunities/infra/typeorm/entities/Opportunities';
import AppError from '@shared/errors/AppErros';

class ListOpportunityService {
  public async execute(id: string): Promise<Opportunities> {
    const opportunitiesRepository = getRepository(Opportunities);

    const opportunity = await opportunitiesRepository.findOne(id);

    if (!opportunity) {
      throw new AppError('Opportunity not found', 404);
    }

    return opportunity;
  }
}

export default ListOpportunityService;
