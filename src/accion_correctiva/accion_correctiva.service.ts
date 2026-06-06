import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAccionCorrectivaDto } from './dto/create-accion_correctiva.dto';
import { UpdateAccionCorrectivaDto } from './dto/update-accion_correctiva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccionCorrectiva } from './entities/accion_correctiva.entity';

@Injectable()
export class accion_correctivaService {

  constructor(
    @InjectRepository(AccionCorrectiva)
    private readonly accionCorrectivaRepository: Repository<AccionCorrectiva>,
  ){}

  async create(createAccionCorrectivaDto: CreateAccionCorrectivaDto) {
    try{
      const AccionCorrectiva = this.accionCorrectivaRepository.create(createAccionCorrectivaDto);
      await this.accionCorrectivaRepository.save(AccionCorrectiva);
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