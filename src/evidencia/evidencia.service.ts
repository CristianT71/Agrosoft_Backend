import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateEvidenciaDto } from './dto/create-evidencia.dto';
import { UpdateEvidenciaDto } from './dto/update-evidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evidencia } from './entities/evidencia.entity';


@Injectable()
export class EvidenciaService {

  constructor(
    @InjectRepository(Evidencia)
    private readonly evidenciaRepository: Repository<Evidencia>
  ) {}

  async create(createEvidenciaDto: CreateEvidenciaDto) {
    try {
      const evidencia = this.evidenciaRepository.create(createEvidenciaDto);
      await this.evidenciaRepository.save(evidencia);
    } catch (error) {
      throw new InternalServerErrorException('Error al registrar evidencia');
    }
  }

  async findAll() {
    return this.evidenciaRepository.find();
  }

  async findOne(id: string) {
    const evidencia = await this.evidenciaRepository.findOneBy({ id });
    if (!evidencia) {
      throw new InternalServerErrorException('Evidencia con el id ${id} no encontrado');
    }
    return evidencia;
  }

  async update(id: string, updateEvidenciaDto: UpdateEvidenciaDto) {
    const evidencia = await this.evidenciaRepository.preload({
      id, ...updateEvidenciaDto,
    });
    if(evidencia) {
      throw new NotFoundException('Evidencia con el id ${id} no encontrado')
  }
}

  async remove(id: string) {
    const evidencia = await this.findOne(id);
    await this.evidenciaRepository.remove(evidencia);
    return 'Evidencia eliminada correctamente';
  }
}
