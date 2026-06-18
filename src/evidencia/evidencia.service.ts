import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEvidenciaDto } from './dto/create-evidencia.dto';
import { UpdateEvidenciaDto } from './dto/update-evidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidencia } from './entities/evidencia.entity';
import { Incidencia } from '../incidencia/entities/incidencia.entity';

@Injectable()
export class EvidenciaService {

  constructor(
    @InjectRepository(Evidencia)
    private readonly evidenciaRepository: Repository<Evidencia>,

    @InjectRepository(Incidencia)
    private readonly incidenciaRepository: Repository<Incidencia>,
  ) {}

  async create(createEvidenciaDto: CreateEvidenciaDto) {
    const {incidenciaId, ...datosEvidencia} = createEvidenciaDto;

    const incidencia = await this.incidenciaRepository.findOneBy({ id: incidenciaId });
    if (!incidencia) {
      throw new NotFoundException(`Incidencia con id ${incidenciaId} no existe`)
    }
    try {
      const evidencia = this.evidenciaRepository.create({
        ...datosEvidencia,
        incidencia,
      }); 
      return await this.evidenciaRepository.save(evidencia);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error al registrar la evidencia`);
    }
  }

  async findAll() {
    return await this.evidenciaRepository.find();
  }

  async findOne(id: string) {
    const evidencia = await this.evidenciaRepository.findOneBy({ id });
    if (!evidencia) {
      throw new NotFoundException(`Evidencia con id ${id} no existe`);
    }
    return evidencia;
  }

  async update(id: string, updateEvidenciaDto: UpdateEvidenciaDto) {
    const evidencia = await this.evidenciaRepository.preload({
      id,
      ...updateEvidenciaDto
    });
    if (!evidencia) {
      throw new NotFoundException(`evidencia con id ${id} no existe`);
    }
    try {
      await this.evidenciaRepository.save(evidencia);
      return evidencia;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar la evidencia`);
    }
  }

  async remove(id: string) {
    const evidencia = await this.findOne(id);
    await this.evidenciaRepository.remove(evidencia);
    return `la evidencia fue eliminada exitosamente`;
  }
}
