import { Injectable } from '@nestjs/common';
import { CreatePlanManejoDto } from './dto/create-plan_manejo.dto';
import { UpdatePlanManejoDto } from './dto/update-plan_manejo.dto';

@Injectable()
export class PlanManejoService {
  create(createPlanManejoDto: CreatePlanManejoDto) {
    return 'This action adds a new planManejo';
  }

  findAll() {
    return `This action returns all planManejo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} planManejo`;
  }

  update(id: number, updatePlanManejoDto: UpdatePlanManejoDto) {
    return `This action updates a #${id} planManejo`;
  }

  remove(id: number) {
    return `This action removes a #${id} planManejo`;
  }
}
