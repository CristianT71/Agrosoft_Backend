import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoIncidencia } from './entities/tipo_incidencia.entity';
import { CreateTipoIncidenciaDto } from './dto/create-tipo_incidencia.dto';

@Injectable()
export class TipoIncidenciaService {
  constructor(
    @InjectRepository(TipoIncidencia)
    private readonly tipoIncidenciaRepository: Repository<TipoIncidencia>,
  ) {}

  async crear(createTipoIncidenciaDto: CreateTipoIncidenciaDto): Promise<TipoIncidencia> {
    const nuevoTipo = this.tipoIncidenciaRepository.create(createTipoIncidenciaDto);
    return await this.tipoIncidenciaRepository.save(nuevoTipo);
  }

  async obtenerTodos(): Promise<TipoIncidencia[]> {
    return await this.tipoIncidenciaRepository.find();
  }

  async obtenerUno(id: number): Promise<TipoIncidencia> {
    const tipo = await this.tipoIncidenciaRepository.findOneBy({ id });
    if (!tipo) {
      throw new NotFoundException(`El tipo de incidencia con ID ${id} no existe`);
    }
    return tipo;
  }
}