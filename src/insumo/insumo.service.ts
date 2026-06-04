import { Injectable } from '@nestjs/common';
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


  create(createInsumoDto: CreateInsumoDto) {
    return 'This action adds a new insumo';
  }

  findAll() {
    return `This action returns all insumo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} insumo`;
  }

  update(id: number, updateInsumoDto: UpdateInsumoDto) {
    return `This action updates a #${id} insumo`;
  }

  remove(id: number) {
    return `This action removes a #${id} insumo`;
  }
}
