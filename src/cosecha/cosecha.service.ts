import { Injectable } from '@nestjs/common';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';

@Injectable()
export class CosechaService {
  create(createCosechaDto: CreateCosechaDto) {
    return 'This action adds a new cosecha';
  }

  findAll() {
    return `This action returns all cosecha`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cosecha`;
  }

  update(id: number, updateCosechaDto: UpdateCosechaDto) {
    return `This action updates a #${id} cosecha`;
  }

  remove(id: number) {
    return `This action removes a #${id} cosecha`;
  }
}
