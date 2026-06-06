import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAccionEjecutadaDto } from './dto/create-accion_ejecutada.dto';
import { UpdateAccionEjecutadaDto } from './dto/update-accion_ejecutada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccionEjecutada } from './entities/accion_ejecutada.entity';


@Injectable()
export class AccionEjecutadaService {

  constructor(
    @InjectRepository(AccionEjecutada)
    private readonly accionEjecutadaRepository: Repository<AccionEjecutada>,
  ){}

  async create(createAccionEjecutadaDto: CreateAccionEjecutadaDto) {
    try{
      const AccionEjecutada = this.accionEjecutadaRepository.create(createAccionEjecutadaDto);
      await this.accionEjecutadaRepository.save(AccionEjecutada);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar una accion_ejecutada');
    }

  }

  async findAll() {
    return await this.accionEjecutadaRepository.find();
  }

  async findOne(id: string) {
  const AccionEjecutada = await this.accionEjecutadaRepository.findOneBy({ id});
  if (!AccionEjecutada){
    throw new NotFoundException(`accion_ejecutada con id ${id} no existe`)
  }
  return AccionEjecutada;
  }

  async update(id: string, updateAccionEjecutadaDto: UpdateAccionEjecutadaDto) {
    const AccionEjecutada = await this.accionEjecutadaRepository.preload({
      id,
      ...updateAccionEjecutadaDto,
    });
    if (!AccionEjecutada){
      throw new NotFoundException(`AccionEjecutada con id ${id} no existe`)
    }
    try{
      await this.accionEjecutadaRepository.save(AccionEjecutada);
      return AccionEjecutada; 
    } catch (error){
      throw new InternalServerErrorException('No se puede actualizar la accion_ejecutada')
    }

  }

  async remove(id: string) {
    const AccionEjecutada = await this.findOne(id);
    await this.accionEjecutadaRepository.remove(AccionEjecutada);
    return 'AccionEjecutada eliminada correctamente';
  }
}