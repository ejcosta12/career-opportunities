import { getRepository } from 'typeorm';

import Opportunities from '@modules/opportunities/infra/typeorm/entities/Opportunities';

import AppError from '@shared/errors/AppErros';

class DeleteOpportunitiesService {
  public async execute(id: string): Promise<any> {
    if (!id) {
      throw new AppError('Impossible to find reference, empty id.', 400);
    }
    const opportunitiesRepository = getRepository(Opportunities);
    await opportunitiesRepository.delete(id);
  }
}

export default DeleteOpportunitiesService;
