import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private readonly cosechaRepository: Repository<Cosecha>
  ){}

  async create(createCosechaDto: CreateCosechaDto) {
    try {
      const cosecha = this.cosechaRepository.create(createCosechaDto);
      await this.cosechaRepository.save(cosecha)
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: No se pudo crear cosecha')
    }
  }

  async findAll() {
    return this.cosechaRepository.find();
  }

  async findOne(id: string) {
    const cosecha = await this.cosechaRepository.findOneBy({ id })
    if (!cosecha) {
      throw new NotFoundException(`Cosecha con id ${id} no existe`)
    }
    return cosecha;
  }

  async update(id: string, updateCosechaDto: UpdateCosechaDto) {
    const cosecha = await this.cosechaRepository.preload({
      id,
      ...updateCosechaDto,
    });
    if (!cosecha){
      throw new NotFoundException(`Cosecha con id ${id} no existe`)
    }
    try {
      await this.cosechaRepository.save(cosecha);
      return cosecha;
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: No se pudo actualizar la cosecha')
    }
  }

  async remove(id: string) {
    const cosecha = await this.findOne(id)
    await this.cosechaRepository.remove(cosecha)
    return 'Cosecha eliminada exitosamente';
  }
}
