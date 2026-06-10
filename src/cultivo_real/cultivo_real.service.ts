import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCultivoRealDto } from './dto/create-cultivo_real.dto';
import { UpdateCultivoRealDto } from './dto/update-cultivo_real.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CultivoReal } from './entities/cultivo_real.entity';

@Injectable()
export class CultivoRealService {

  constructor(
    @InjectRepository(CultivoReal)
    private readonly CultivoRealRepository: Repository<CultivoReal>
  ) {}

  async create(createCultivoRealDto: CreateCultivoRealDto) {
    try {
      const cultivo_real = this.CultivoRealRepository.create(createCultivoRealDto); 
      await this.CultivoRealRepository.save(cultivo_real);
      return cultivo_real; 
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error al registrar el cultivo real`);
    }
  }

  async findAll() {
    return await this.CultivoRealRepository.find();
  }

  async findOne(id: string) {
    const cultivo_real = await this.CultivoRealRepository.findOneBy({ id });
    if (!cultivo_real) {
      throw new NotFoundException(`Cultivo real con id ${id} no existe`);
    }
    return cultivo_real;
  }

  async update(id: string, updateCultivoRealDto: UpdateCultivoRealDto) {
    const cultivo_real = await this.CultivoRealRepository.preload({
      id,
      ...updateCultivoRealDto
    });
    if (!cultivo_real) {
      throw new NotFoundException(`cultivo real con id ${id} no existe`);
    }
    try {
      await this.CultivoRealRepository.save(cultivo_real);
      return cultivo_real;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el cultivo real`);
    }
  }

  async remove(id: string) {
    const cultivo_real = await this.findOne(id);
    await this.CultivoRealRepository.remove(cultivo_real);
    return `el cultivo real fue eliminado exitosamente`;
  }
}
