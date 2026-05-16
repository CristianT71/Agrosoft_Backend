import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateIncidenciaDto } from './dto/create-incidencia.dto';
import { UpdateIncidenciaDto } from './dto/update-incidencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incidencia } from './entities/incidencia.entity';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class IncidenciaService {
  constructor(
    @InjectRepository(Incidencia)
    private readonly incidenciaRepository: Repository<Incidencia>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ){}
  
  async create(createIncidenciaDto: CreateIncidenciaDto) {
    const { usuarioId, ...datosIncidencia } = createIncidenciaDto; //extrae el id del usuaro

    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });  //validar si usuario existe antes de registrar
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no existe`)
    }
    try {
      const incidencia = this.incidenciaRepository.create({
        ...datosIncidencia,
        usuario,
      });
      return await this.incidenciaRepository.save(incidencia);
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: No se pudo crear incidencia')
    }
  }

  async findAll() {
    return this.incidenciaRepository.find({
      relations: ['usuario'],
    });
  }

  async findOne(id: string) {
    const incidencia = await this.incidenciaRepository.findOne({
      where: { id },
      relations: ['usuario']
    })
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
      throw new InternalServerErrorException('Error: no se pudo actualizar incidencia')
    }
  }

  async remove(id: string) {
    const incidencia = await this.findOne(id);
    await this.incidenciaRepository.remove(incidencia)
    return 'Incidencia eliminada exitosamente'
  }
}
