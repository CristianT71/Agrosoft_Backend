import { Injectable } from '@nestjs/common';
import { CreateCultivoRealDto } from './dto/create-cultivo_real.dto';
import { UpdateCultivoRealDto } from './dto/update-cultivo_real.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CultivoReal } from './entities/cultivo_real.entity';

@Injectable()
export class CultivoRealService {

  constructor(
    @InjectRepository (CultivoReal)
    private readonly CultivoRealRepository:
    Repository<CultivoReal>
  ){}
  
  create(createCultivoRealDto: CreateCultivoRealDto) {
    return 'This action adds a new cultivoReal';
  }

  findAll() {
    return `This action returns all cultivoReal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cultivoReal`;
  }

  update(id: number, updateCultivoRealDto: UpdateCultivoRealDto) {
    return `This action updates a #${id} cultivoReal`;
  }

  remove(id: number) {
    return `This action removes a #${id} cultivoReal`;
  }
}
