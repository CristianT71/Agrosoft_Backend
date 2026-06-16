import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCultivoRealDto } from './dto/create-cultivo_real.dto';
import { UpdateCultivoRealDto } from './dto/update-cultivo_real.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CultivoReal } from './entities/cultivo_real.entity';
import { CultivoBase } from '../cultivo_base/entities/cultivo_base.entity';

@Injectable()
export class CultivoRealService {

  constructor(
    @InjectRepository(CultivoReal)
    private readonly cultivoRealRepository: Repository<CultivoReal>,

    @InjectRepository(CultivoBase)
    private readonly cultivoBaseRepository: Repository<CultivoBase>,
  ) {}

  async create(createCultivoRealDto: CreateCultivoRealDto) {
    const {cultivoBaseId, ...datosCultivoReal} = createCultivoRealDto;

    const cultivoBase = await this.cultivoBaseRepository.findOneBy({ id: cultivoBaseId });
    if (!cultivoBase) {
      throw new NotFoundException(`Cultivo Base con id ${cultivoBaseId} no existe`)
    }
    try {
      const cultivoReal = this.cultivoRealRepository.create({
        ...datosCultivoReal,
        cultivoBase,
      }); 
      return await this.cultivoRealRepository.save(cultivoReal);
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`error al registrar el cultivo real`);
    }
  }

  async findAll() {
    return await this.cultivoRealRepository.find();
  }

  async findOne(id: string) {
    const cultivoReal = await this.cultivoRealRepository.findOneBy({ id });
    if (!cultivoReal) {
      throw new NotFoundException(`Cultivo real con id ${id} no existe`);
    }
    return cultivoReal;
  }

  async update(id: string, updateCultivoRealDto: UpdateCultivoRealDto) {
    const cultivoReal = await this.cultivoRealRepository.preload({
      id,
      ...updateCultivoRealDto
    });
    if (!cultivoReal) {
      throw new NotFoundException(`cultivo real con id ${id} no existe`);
    }
    try {
      await this.cultivoRealRepository.save(cultivoReal);
      return cultivoReal;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(`no se puede actualizar el cultivo real`);
    }
  }

  async remove(id: string) {
    const cultivoReal = await this.findOne(id);
    await this.cultivoRealRepository.remove(cultivoReal);
    return `el cultivo real fue eliminado exitosamente`;
  }
}
