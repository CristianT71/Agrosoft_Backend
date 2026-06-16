import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAccionEjecutadaDto } from './dto/create-accion_ejecutada.dto';
import { UpdateAccionEjecutadaDto } from './dto/update-accion_ejecutada.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccionEjecutada } from './entities/accion_ejecutada.entity';
import { Usuario } from '../usuario/entities/usuario.entity';
import { CultivoReal } from '../cultivo_real/entities/cultivo_real.entity';


@Injectable()
export class AccionEjecutadaService {

  constructor(
    @InjectRepository(AccionEjecutada)
    private readonly accionEjecutadaRepository: Repository<AccionEjecutada>,
    
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(CultivoReal)
    private readonly cultivoRealRepository: Repository<CultivoReal>
  ){}

  async create(createAccionEjecutadaDto: CreateAccionEjecutadaDto) {
    const {usuarioId, cultivoRealId, ...datosAccionEjecutada} = createAccionEjecutadaDto; //Estraenmos el id

    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no existe`)
    }

    const cultivoReal = await this.cultivoRealRepository.findOneBy({ id: cultivoRealId });
    if (!cultivoReal) {
      throw new NotFoundException(`Cultivo con id ${cultivoRealId} no existe`)
    }

    try{
      const accionEjecutada = this.accionEjecutadaRepository.create({
        ...datosAccionEjecutada,
        usuario,
        cultivoReal
      });
      return await this.accionEjecutadaRepository.save(accionEjecutada);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar una accion_ejecutada');
    }

  }

  async findAll() {
    return await this.accionEjecutadaRepository.find();
  }

  async findOne(id: string) {
  const accionEjecutada = await this.accionEjecutadaRepository.findOneBy({ id});
  if (!accionEjecutada){
    throw new NotFoundException(`accion_ejecutada con id ${id} no existe`)
  }
  return accionEjecutada;
  }

  async update(id: string, updateAccionEjecutadaDto: UpdateAccionEjecutadaDto) {
    const accionEjecutada = await this.accionEjecutadaRepository.preload({
      id,
      ...updateAccionEjecutadaDto,
    });
    if (!accionEjecutada){
      throw new NotFoundException(`AccionEjecutada con id ${id} no existe`)
    }
    try{
      await this.accionEjecutadaRepository.save(accionEjecutada);
      return accionEjecutada; 
    } catch (error){
      throw new InternalServerErrorException('No se puede actualizar la accion_ejecutada')
    }

  }

  async remove(id: string) {
    const accionEjecutada = await this.findOne(id);
    await this.accionEjecutadaRepository.remove(accionEjecutada);
    return 'AccionEjecutada eliminada correctamente';
  }
}