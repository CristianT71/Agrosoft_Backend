import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { Repository } from 'typeorm';
import { Venta } from '../venta/entities/venta.entity';

@Injectable()
export class ReporteService {

  constructor(
    @InjectRepository (Reporte)
    private readonly reporteRepository:Repository<Reporte>,

    @InjectRepository (Venta)
    private readonly ventaRepository: Repository<Venta>
  ){}
  async create(createReporteDto: CreateReporteDto) {
    const {ventaId, ...datosReporte} = createReporteDto;
    const venta = await this.ventaRepository.findOneBy({id: ventaId});
    if (!venta) {
      throw new NotFoundException(`venta con id ${ventaId} No existe`)
    }
    try{
<<<<<<< HEAD
      const Reporte = this.reporteRepository.create({
      ...datosReporte,
      venta,
      });
    return await this.reporteRepository.save(Reporte);
=======
      const Reporte = this.ReporteRepository.create({
      ...datosReporte,
      venta,
      });
    return await this.ReporteRepository.save(Reporte);
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException(`error al registrar el reporte`)
    }
  }

  async findAll() {
<<<<<<< HEAD
    return await this.reporteRepository.find()
  }

  async findOne(id: string) {
    const Reporte = await this.reporteRepository.findOneBy({id});
=======
    return await this.ReporteRepository.find()
  }

  async findOne(id: string) {
    const Reporte = await this.ReporteRepository.findOneBy({id});
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
    if(!Reporte){
      throw new NotFoundException (`Reporte con id ${id} no existe`)
    }
    return Reporte;
  }

  async update(id: string, updateReporteDto: UpdateReporteDto) {
<<<<<<< HEAD
    const Reporte = await this.reporteRepository.preload({
=======
    const Reporte = await this.ReporteRepository.preload({
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
      id,
      ...updateReporteDto
    });
    if(!Reporte){
      throw new NotFoundException(`Reporte con id ${id} no existe`);
    }
    try{
<<<<<<< HEAD
      await this.reporteRepository.save(Reporte);
=======
      await this.ReporteRepository.save(Reporte);
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
      return Reporte
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el reporte`)
    }
  }

  async remove(id: string) {
    const Reporte = await this.findOne(id);
<<<<<<< HEAD
    await this.reporteRepository.remove(Reporte);
=======
    await this.ReporteRepository.remove(Reporte);
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
    return `Reporte eliminado exitosamente`;
  }
}
