import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

import AppError from '../errors/AppErros';

interface Request {
  name: string;
  description: string;
  local: string;
}

class CreateOpportunityService {
  public async execute({ name, description, local }: Request): Promise<Opportunities> {
    if (!name || !description || !local) {
      throw new AppError('Name or Description or Local is not filled', 400);
    }
    const opportunitiesRepository = getRepository(Opportunities);

    const opportunity = opportunitiesRepository.create({ name, description, local });

    await opportunitiesRepository.save(opportunity);

    return opportunity;
  }
}

export default CreateOpportunityService;
