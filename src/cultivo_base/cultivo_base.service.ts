import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCultivoBaseDto } from './dto/create-cultivo_base.dto';
import { UpdateCultivoBaseDto } from './dto/update-cultivo_base.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CultivoBase } from './entities/cultivo_base.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CultivoBaseService {
  constructor(
    @InjectRepository(CultivoBase)
      private readonly cultivoBaseRepository: Repository<CultivoBase>,
  ){}

  async create(createCultivoBaseDto: CreateCultivoBaseDto) {
    try {
      const cultivobase = this.cultivoBaseRepository.create(createCultivoBaseDto);
      await this.cultivoBaseRepository.save(cultivobase);
      return cultivobase;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error al registrar el cultivo')
    }
  }

  async findAll() {
    return this.cultivoBaseRepository.find();
  }

  async findOne(id: string) {
    const cultivobase = await this.cultivoBaseRepository.findOneBy({ id });
    if (!cultivobase) {
      throw new NotFoundException(`Cultivo base con id ${id} no existe`)
    }
    return cultivobase;
  }

  async update(id: string, updateCultivoBaseDto: UpdateCultivoBaseDto) {
    const cultivobase = await this.cultivoBaseRepository.preload({
      id,
      ...updateCultivoBaseDto,
    });
    if (!cultivobase) {
      throw new NotFoundException(`Cultivo base con id ${id} no existe`);
    }
    try {
      await this.cultivoBaseRepository.save(cultivobase);
      return cultivobase;
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error al actualizar el cultivo')
    }
  }

  async remove(id: string) {
    const cultivobase = await this.findOne(id);
    await this.cultivoBaseRepository.remove(cultivobase)
    return 'Cultivo base eliminado con exito';
  }
}
