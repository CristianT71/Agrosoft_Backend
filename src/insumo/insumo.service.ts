import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Insumo } from './entities/insumo.entity';
import { Repository } from 'typeorm';
import { find } from 'rxjs';

@Injectable()
export class InsumoService {

  constructor(
    @InjectRepository (Insumo)
    private readonly InsumoRepository:
    Repository<Insumo>,
  ){}

  async create(createInsumoDto: CreateInsumoDto) {
    try{
      const Insumo = this.InsumoRepository.create
      (createInsumoDto);
      await this.InsumoRepository.save(Insumo);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar el insumo');
    }
  }

  async findAll() {
  return await this.InsumoRepository.find()
  }

  async findOne(id: string) {
    const Insumo = await this.InsumoRepository.findOneBy({id});
    if(!Insumo){
      throw new NotFoundException (`Insumo con id ${id} no existe`)
    }
    return Insumo;
  }

  async update(id: string, updateInsumoDto: UpdateInsumoDto) {
    const insumo = await this.InsumoRepository.preload({
      id,
      ...updateInsumoDto
    });
    if(!insumo){
      throw new NotFoundException(`insumo con id ${id} no existe`);
    }
    try{
      await this.InsumoRepository.save(insumo);
      return insumo
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el insumo`)
    }
  }

  async remove(id: string) {
    const insumo = await this.findOne(id);
    await this.InsumoRepository.remove(insumo);
    return `insumo eliminado exitosamente`;
  }
}
