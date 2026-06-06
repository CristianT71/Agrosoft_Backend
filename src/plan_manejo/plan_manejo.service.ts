import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlanManejoDto } from './dto/create-plan_manejo.dto';
import { UpdatePlanManejoDto } from './dto/update-plan_manejo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanManejo } from './entities/plan_manejo.entity';
import { Repository } from 'typeorm';

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

  async update(id: string, updatePlanManejoDto: UpdatePlanManejoDto) {
    const PlanManejo = await this.planManejoRepository.preload({
      id,
      ...updatePlanManejoDto,
    });
    if(!PlanManejo){
      throw new NotFoundException(`Plan manejo con id ${id} no existe`);
    }
  }

  async remove(id: string) {
    const PlanManejo = await this.findOne(id) ;
    await this.planManejoRepository.remove(PlanManejo);
    return 'La actividad fue ejecutada correctamente';
  }
}
