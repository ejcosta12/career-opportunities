import { getRepository } from 'typeorm';

import Opportunities from '../models/Opportunities';

interface Request {
  name: string;
  description: string;
  local: string;
}

class CreateOpportunitiesService {
  public async execute({ name, description, local }: Request): Promise<Opportunities> {
    const opportunities = getRepository(Opportunities);

    const opportunitie = opportunities.create({ name, description, local });

    return opportunitie;
  }
}

export default CreateOpportunitiesService;
