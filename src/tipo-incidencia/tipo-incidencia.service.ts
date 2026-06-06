import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTipoIncidenciaDto } from './dto/create-tipo-incidencia.dto';
import { UpdateTipoIncidenciaDto } from './dto/update-tipo-incidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoIncidencia } from './entities/tipo-incidencia.entity';

@Injectable()
export class TipoIncidenciaService {
  constructor(
    @InjectRepository(TipoIncidencia)
    private tipoIncidenciaRepository: Repository<TipoIncidencia>,
  ) {}

  async create(createTipoIncidenciaDto: CreateTipoIncidenciaDto) {
    try {
    const tipoIncidencia = this.tipoIncidenciaRepository.create(createTipoIncidenciaDto);
    await this.tipoIncidenciaRepository.save(tipoIncidencia);
  } catch (error) {
    throw new InternalServerErrorException('Error al registrar tipo incidencia');
  }
  }

  async findAll() {
    return this.tipoIncidenciaRepository.find();
  }

  async findOne(id: string) {
    const tipoIncidencia = await this.tipoIncidenciaRepository.findOneBy({ id });
    if (!tipoIncidencia) {
      throw new InternalServerErrorException('Tipo incidencia con el id ${id} no encontrado');
    }
    return tipoIncidencia;
  }

  async update(id: string, updateTipoIncidenciaDto: UpdateTipoIncidenciaDto) {
    const tipoIncidencia = await this.tipoIncidenciaRepository.preload({
      id, ...updateTipoIncidenciaDto,
    });
    if(!tipoIncidencia) {
      throw new NotFoundException(`Tipo incidencia con el id ${id} no encontrado`)
  }
  }
  async remove(id: string) {
    const tipoIncidencia = await this.findOne(id);
    await this.tipoIncidenciaRepository.remove(tipoIncidencia);
    return 'Tipo incidencia eliminado correctamente';
  }
  }
