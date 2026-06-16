import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReporteDto } from './dto/create-reporte.dto';
import { UpdateReporteDto } from './dto/update-reporte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { Repository } from 'typeorm';
import { Venta } from '../venta/entities/venta.entity';
import { Cosecha } from '../cosecha/entities/cosecha.entity';
import { Incidencia } from '../incidencia/entities/incidencia.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class ReporteService {

  constructor(
    @InjectRepository (Reporte)
    private readonly reporteRepository:Repository<Reporte>,

    @InjectRepository (Venta)
    private readonly ventaRepository: Repository<Venta>,

    @InjectRepository (Cosecha)
    private readonly cosechaRepository: Repository<Cosecha>,

    @InjectRepository (Incidencia)
    private readonly incidenciaRepository: Repository<Incidencia>,

    @InjectRepository (Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ){}
  async create(createReporteDto: CreateReporteDto) {
    const {ventaId, cosechaId, incidenciaId, usuarioId, ...datosReporte} = createReporteDto;

    const venta = await this.ventaRepository.findOneBy({id: ventaId});
    if (!venta) {
      throw new NotFoundException(`venta con id ${ventaId} No existe`)
    }

    const cosecha = await this.cosechaRepository.findOneBy({ id: cosechaId });
    if (!cosecha) {
      throw new NotFoundException(`Cosecha con id ${cosechaId} no existe`)
    }

    const incidencia = await this.incidenciaRepository.findOneBy({ id: incidenciaId });
    if (!incidencia) {
      throw new NotFoundException(`Incidencia con id ${incidencia} no existe`)
    }

    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no existe`)
    }

    try{
      const Reporte = this.reporteRepository.create({
      ...datosReporte,
      venta,
      cosecha,
      incidencia,
      usuario,
      });
    return await this.reporteRepository.save(Reporte);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException(`error al registrar el reporte`)
    }
  }

  async findAll() {
    return await this.reporteRepository.find()
  }

  async findOne(id: string) {
    const Reporte = await this.reporteRepository.findOneBy({id});
    if(!Reporte){
      throw new NotFoundException (`Reporte con id ${id} no existe`)
    }
    return Reporte;
  }

  async update(id: string, updateReporteDto: UpdateReporteDto) {
    const Reporte = await this.reporteRepository.preload({
      id,
      ...updateReporteDto
    });
    if(!Reporte){
      throw new NotFoundException(`Reporte con id ${id} no existe`);
    }
    try{
      await this.reporteRepository.save(Reporte);
      return Reporte
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el reporte`)
    }
  }

  async remove(id: string) {
    const Reporte = await this.findOne(id);
    await this.reporteRepository.remove(Reporte);
    return `Reporte eliminado exitosamente`;
  }
}
