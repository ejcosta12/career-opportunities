import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

class DeleteOpportunitiesService {
  public async execute(id: string): Promise<any> {
    const opportunitiesRepository = getRepository(Opportunities);
    await opportunitiesRepository.delete(id);
  }
}

export default DeleteOpportunitiesService;
