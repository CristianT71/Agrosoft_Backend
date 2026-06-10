import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { PlanManejoService } from '../plan_manejo/plan_manejo.service';
import { InsumoService } from '../insumo/insumo.service';


@Injectable()
export class TratamientoService {

  constructor(
    @InjectRepository(Tratamiento)
    private readonly tratamientoRepository: Repository<Tratamiento>,
    private readonly planManejoService: PlanManejoService,
    private readonly insumoService: InsumoService,
  ){}

  async create(createTratamientoDto: CreateTratamientoDto) {
    try{
      const Tratamiento = this.tratamientoRepository.create(createTratamientoDto);
      await this.tratamientoRepository.save(Tratamiento);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar una tratamiento');
    }

  }

  async findAll() {
    return await this.tratamientoRepository.find();
  }

  async findOne(id: string) {
  const Tratamiento = await this.tratamientoRepository.findOneBy({ id});
  if (!Tratamiento){
    throw new NotFoundException(`tratamiento con id ${id} no existe`)
  }
  return Tratamiento;
  }

  async update(id: string, updateTratamientoDto: UpdateTratamientoDto) {
    const Tratamiento = await this.tratamientoRepository.preload({
      id,
      ...updateTratamientoDto,
    });
    if (!Tratamiento){
      throw new NotFoundException(`Tratamiento con id ${id} no existe`)
    }
    try{
      await this.tratamientoRepository.save(Tratamiento);
      return Tratamiento; 
    } catch (error){
      throw new InternalServerErrorException('No se puede actualizar el tratamiento')
    }

  }

  async remove(id: string) {
    const Tratamiento = await this.findOne(id);
    await this.tratamientoRepository.remove(Tratamiento);
    return 'Tratamiento eliminado correctamente';
  }
}