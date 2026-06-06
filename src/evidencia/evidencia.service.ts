import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidencia } from './entities/evidencia.entity';
import { CreateEvidenciaDto } from './dto/create-evidencia.dto';

@Injectable()
export class EvidenciaService {
  constructor(
    @InjectRepository(Evidencia)
    private readonly evidenciaRepository: Repository<Evidencia>,
  ) {}

  async crear(createEvidenciaDto: CreateEvidenciaDto): Promise<Evidencia> {
    const nuevaEvidencia = this.evidenciaRepository.create(createEvidenciaDto);
    return await this.evidenciaRepository.save(nuevaEvidencia);
  }

  async obtenerTodas(): Promise<Evidencia[]> {
    return await this.evidenciaRepository.find();
  }

  async obtenerPorIncidencia(idIncidencia: number): Promise<Evidencia[]> {
    return await this.evidenciaRepository.findBy({ id_incidencia: idIncidencia });
  }
}