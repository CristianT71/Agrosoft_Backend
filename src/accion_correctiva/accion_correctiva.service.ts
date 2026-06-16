import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAccionCorrectivaDto } from './dto/create-accion_correctiva.dto';
import { UpdateAccionCorrectivaDto } from './dto/update-accion_correctiva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccionCorrectiva } from './entities/accion_correctiva.entity';
import { Insumo } from '../insumo/entities/insumo.entity';
import { Incidencia } from '../incidencia/entities/incidencia.entity';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class accion_correctivaService {

  constructor(
    @InjectRepository(AccionCorrectiva)
    private readonly accionCorrectivaRepository: Repository<AccionCorrectiva>,
  
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(Insumo)
    private readonly insumoRepository: Repository<Insumo>,

    @InjectRepository(Incidencia)
    private readonly incidenciaRepository: Repository<Incidencia>
  ){}

  async create(createAccionCorrectivaDto: CreateAccionCorrectivaDto) {
    const { usuarioId, insumoId, incidenciaId, ...datosAccionCorrectiva } = createAccionCorrectivaDto; //Extraer ids

    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });  //validar si usuario existe antes de registrar
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no existe`)
    }

    const insumo = await this.insumoRepository.findOneBy({ id: insumoId });
    if (!insumo) {
      throw new NotFoundException(`Insumo con id ${insumoId} no existe`)
    }

    const incidencia = await this.incidenciaRepository.findOneBy({ id: incidenciaId });
    if (!incidencia) {
      throw new NotFoundException(`Incidencia con id ${incidenciaId} no existe`)
    }
    try{
      const AccionCorrectiva = this.accionCorrectivaRepository.create({
        ...datosAccionCorrectiva,
        usuario,
        insumo,
        incidencia,
      });
      return await this.accionCorrectivaRepository.save(AccionCorrectiva);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar una accion correctiva');
    }

  }

  async findAll() {
    return await this.accionCorrectivaRepository.find();
  }

  async findOne(id: string) {
  const AccionCorrectiva = await this.accionCorrectivaRepository.findOneBy({ id});
  if (!AccionCorrectiva){
    throw new NotFoundException(`accion correctiva con id ${id} no existe`)
  }
  return AccionCorrectiva;
  }

  async update(id: string, updateAccionCorrectivaDto: UpdateAccionCorrectivaDto) {
    const AccionCorrectiva = await this.accionCorrectivaRepository.preload({
      id,
      ...updateAccionCorrectivaDto,
    });
    if (!AccionCorrectiva){
      throw new NotFoundException(`Accion correctiva con id ${id} no existe`)
    }
    try{
      await this.accionCorrectivaRepository.save(AccionCorrectiva);
      return AccionCorrectiva; 
    } catch (error){
      throw new InternalServerErrorException('No se puede actualizar el tratamiento')
    }

  }

  async remove(id: string) {
    const AccionCorrectiva = await this.findOne(id);
    await this.accionCorrectivaRepository.remove(AccionCorrectiva);
    return 'Accion correctiva eliminada correctamente';
  }
}