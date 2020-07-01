import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

interface Request {
  name: string;
  description: string;
  local: string;
}

class CreateOpportunityService {
  public async execute({ name, description, local }: Request): Promise<Opportunities> {
    const opportunitiesRepository = getRepository(Opportunities);

    const opportunity = await opportunitiesRepository.create({ name, description, local });

    await opportunitiesRepository.save(opportunity);

    return opportunity;
  }
}

export default CreateOpportunityService;
