import { Injectable, InternalServerErrorException } from '@nestjs/common';
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

  // 🛠️ Similar a tu servicio de usuarios, usando try/catch
  async crear(createEvidenciaDto: CreateEvidenciaDto): Promise<Evidencia> {
    try {
      // 1. Extraemos tu "id_incidencia" original del DTO
      const { id_incidencia, ...datosEvidencia } = createEvidenciaDto;

      // 2. Mapeamos ese ID dentro del objeto "incidencia" que espera la Entity
      const nuevaEvidencia = this.evidenciaRepository.create({
        ...datosEvidencia,
        incidencia: { id: id_incidencia } as any // 👈 Así TypeORM une los cables internamente
      });

      return await this.evidenciaRepository.save(nuevaEvidencia);
    } catch (error) {
      console.log(error); // Tal cual como lo estructuraste en usuarios
      throw new InternalServerErrorException('Error: No se pudo crear la evidencia');
    }
  }

  async obtenerTodas(): Promise<Evidencia[]> {
    return await this.evidenciaRepository.find({
      relations: ['incidencia']
    });
  }

  // src/evidencia/evidencia.service.ts

// 🛠️ Cambiamos el parámetro "idIncidencia" a tipo "string"
async obtenerPorIncidencia(idIncidencia: string): Promise<Evidencia[]> {
  try {
    return await this.evidenciaRepository.find({
      where: {
        incidencia: { id: idIncidencia } // 👈 Ahora sí coinciden los tipos (string con string)
      }
    });
  } catch (error) {
    console.log(error);
    throw new InternalServerErrorException('Error: No se pudieron obtener las evidencias');
  }
}
}