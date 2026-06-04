import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Insumo } from './entities/insumo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InsumoService {

  constructor(
    @InjectRepository(Insumo)
    private readonly InsumoRepository:
    Repository<Insumo>
  ){}


  async create(createInsumoDto: CreateInsumoDto) {
    try{
      const Insumo= this.InsumoRepository.create(createInsumoDto)
      await this.InsumoRepository.save(Insumo);
    } catch (error){
      throw new InternalServerErrorException('Error al registrar el Insumo')
    }
  }

  async findAll() {
    return this.InsumoRepository.find();
  }

  async findOne(id: string) {
    const Insumo= await this.InsumoRepository.findOneBy({ id });
    if (!Insumo){
      throw new NotFoundException(`Insumo con el id ${id} no existe `)
    }
    return Insumo;
  }

  async update(id: string, updateInsumoDto: UpdateInsumoDto) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
