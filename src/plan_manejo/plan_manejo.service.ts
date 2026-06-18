import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePlanManejoDto } from './dto/create-plan_manejo.dto';
import { UpdatePlanManejoDto } from './dto/update-plan_manejo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PlanManejo } from './entities/plan_manejo.entity';
import { Repository } from 'typeorm';
import { CultivoBase } from '../cultivo_base/entities/cultivo_base.entity';

@Injectable()
export class PlanManejoService {

  constructor(
    @InjectRepository(PlanManejo)
    private readonly planManejoRepository: Repository<PlanManejo>,

    @InjectRepository(CultivoBase)
    private readonly cultivoBaseRepository: Repository<CultivoBase>
    ){}

  async create(createPlanManejoDto: CreatePlanManejoDto) {
    const { cultivoBaseId, ...datosPlanManejo } = createPlanManejoDto; // Extraer id de cultibo base

    const cultivoBase = await this.cultivoBaseRepository.findOneBy({ id: cultivoBaseId }); // Validar que cultivoBase exista
    if (!cultivoBase) {
      throw new NotFoundException(`Cultivo Base con id ${cultivoBaseId} no existe`)
    }
    try {
      const planManejo = this.planManejoRepository.create({
      ...datosPlanManejo,
      cultivoBase,
      });
      return await this.planManejoRepository.save(planManejo);
    } catch (error){
      console.log(error);
      throw new InternalServerErrorException('Error al registrar el Plan de Manejo')
    }
  }

  async findAll() {
    return this.planManejoRepository.find();
  }

  async findOne(id: string) {
    const planManejo = await this.planManejoRepository.findOneBy({ id });
    if (!planManejo){
      throw new NotFoundException(`Plan de Manejo con el id ${id} no existe`);
    }
    return planManejo;
  }

  async update(id: string, updatePlanManejoDto: UpdatePlanManejoDto) {
    const planManejo = await this.planManejoRepository.preload({
      id,
      ...updatePlanManejoDto,
    });
    if(!planManejo){
      throw new NotFoundException(`Plan manejo con id ${id} no existe`);
    }
    try {
    await this.planManejoRepository.save(planManejo);
    return planManejo;
  } catch (error){
    console.log(error);
    throw new InternalServerErrorException('Error al actualizar el plan de manejo')
  }
  }

  async remove(id: string) {
    const planManejo = await this.findOne(id) ;
    await this.planManejoRepository.remove(planManejo);
    return 'La actividad fue ejecutada correctamente';
  }
}
