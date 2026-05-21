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

  async findOne(id: number) {
    const Insumo = await this.InsumoRepository.findOne({id});
    if(!Insumo){
      throw new NotFoundException (`Insumo con id $(id) no existe`)
    }
    return Insumo;
  }

  update(id: number, updateInsumoDto: UpdateInsumoDto) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
