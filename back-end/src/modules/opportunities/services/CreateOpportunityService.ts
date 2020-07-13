import { getRepository } from 'typeorm';

import Opportunities from '@modules/opportunities/infra/typeorm/entities/Opportunities';

import AppError from '@shared/errors/AppErros';

interface Request {
  name: string;
  description: string;
  local: string;
  quantity: number;
}

class CreateOpportunityService {
  public async execute({
    name,
    description,
    local,
    quantity,
  }: Request): Promise<Opportunities> {
    if (!name || !description || !local || !quantity) {
      throw new AppError('Name or Description or Local is not filled', 400);
    }
    const opportunitiesRepository = getRepository(Opportunities);

    const opportunity = opportunitiesRepository.create({
      name,
      description,
      local,
      quantity,
    });

    await opportunitiesRepository.save(opportunity);

    return opportunity;
  }
}

export default CreateOpportunityService;
