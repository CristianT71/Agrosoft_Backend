import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incidencia } from './entities/incidencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncidenciaService {
  constructor(
    @InjectRepository(Incidencia)
    private readonly incidenciaRepository: Repository<Incidencia>
  ){}
  
  async create(createIncidenciaDto: CreateIncidenciaDto) {
    try {
      const incidencia = this.incidenciaRepository.create(createIncidenciaDto);
      await this.incidenciaRepository.save(incidencia);
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: No se pudo crear incidencia')
    }
  }

  async findAll() {
    return this.incidenciaRepository.find();
  }

  async findOne(id: string) {
    const incidencia = await this.incidenciaRepository.findOneBy({ id })
    if (!incidencia) {
      throw new NotFoundException(`Incidencia con id ${id} no existe`)
    }
    return incidencia;
  }

  async update(id: string, updateIncidenciaDto: UpdateIncidenciaDto) {
    const incidencia = await this.incidenciaRepository.preload({
      id,
      ...updateIncidenciaDto,
    });
    if (!incidencia) {
      throw new NotFoundException(`Incidencia con id ${id} no existe`)
    }
    try {
      await this.incidenciaRepository.save(incidencia)
      return incidencia;
    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Error: no se pudo actualizar usuario')
    }
  }

  async remove(id: string) {
    const incidencia = await this.findOne(id);
    await this.incidenciaRepository.remove(incidencia)
    return 'Incidencia eliminada exitosamente'
  }
}
