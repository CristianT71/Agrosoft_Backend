import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlanManejoDto } from './dto/create-plan_manejo.dto';
import { UpdatePlanManejoDto } from './dto/update-plan_manejo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanManejo } from './entities/plan_manejo.entity';
import { Repository } from 'typeorm/browser';

@Injectable()
export class PlanManejoService {

  constructor(
    @InjectRepository(PlanManejo)
    private readonly planManejoRepository: Repository<PlanManejo> 
    ){}

  async create(createPlanManejoDto: CreatePlanManejoDto) {
    try {
      const PlanManejo= this.planManejoRepository.create(createPlanManejoDto)
      await this.planManejoRepository.save(PlanManejo);
    } catch (error){
      console.log(error);
      throw new InternalServerErrorException('Error al registrar el Plan de Manejo')
    }
  }

  async findAll() {
    return this.planManejoRepository.find();
  }

  async findOne(id: string) {
    const PlanManejo = await this.planManejoRepository.findOneBy({ id });
    if (!PlanManejo){
      throw new NotFoundException(`Plan de Manejo con el id ${id} no existe`);
    }
    return PlanManejo;

  }

  update(id: number, updatePlanManejoDto: UpdatePlanManejoDto) {
    return `This action updates a #${id} planManejo`;
  }

  remove(id: number) {
    return `This action removes a #${id} planManejo`;
  }
}
