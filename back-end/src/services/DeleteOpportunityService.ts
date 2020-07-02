import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';
import AppError from '../errors/AppErros';

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
