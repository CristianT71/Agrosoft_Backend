import { Injectable } from '@nestjs/common';
import { CreateCultivoBaseDto } from './dto/create-cultivo_base.dto';
import { UpdateCultivoBaseDto } from './dto/update-cultivo_base.dto';

@Injectable()
export class CultivoBaseService {
  create(createCultivoBaseDto: CreateCultivoBaseDto) {
    return 'This action adds a new cultivoBase';
  }

  findAll() {
    return `This action returns all cultivoBase`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cultivoBase`;
  }

  update(id: number, updateCultivoBaseDto: UpdateCultivoBaseDto) {
    return `This action updates a #${id} cultivoBase`;
  }

  remove(id: number) {
    return `This action removes a #${id} cultivoBase`;
  }
}
