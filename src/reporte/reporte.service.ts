import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReporteService {

  constructor(
    @InjectRepository (Reporte)
    private readonly ReporteRepository:
    Repository<Reporte>,
  ){}
  async create(createReporteDto: CreateReporteDto) {
    try{
      const Reporte = this.ReporteRepository.create
      (createReporteDto);
      await this.ReporteRepository.save(Reporte);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException(`error al registrar el reporte`)
    }
  }

  async findAll() {
    return await this.ReporteRepository.find()
  }

  async findOne(id: string) {
    const Reporte = await this.ReporteRepository.findOneBy({id});
    if(!Reporte){
      throw new NotFoundException (`Reporte con id ${id} no existe`)
    }
    return Reporte;
  }

  async update(id: string, updateReporteDto: UpdateReporteDto) {
    const Reporte = await this.ReporteRepository.preload({
      id,
      ...updateReporteDto
    });
    if(!Reporte){
      throw new NotFoundException(`Reporte con id ${id} no existe`);
    }
    try{
      await this.ReporteRepository.save(Reporte);
      return Reporte
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el reporte`)
    }
  }

  async remove(id: string) {
    const Reporte = await this.findOne(id);
    await this.ReporteRepository.remove(Reporte);
    return `Reporte eliminado exitosamente`;
  }
}
