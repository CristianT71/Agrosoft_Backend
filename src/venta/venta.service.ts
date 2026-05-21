import { Injectable, InternalServerErrorException, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Venta } from './entities/venta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VentaService {

  constructor(
    @InjectRepository (Venta)
    private readonly VentaRepository:
    Repository<Venta>,
  ){}

  async create(createVentaDto: CreateVentaDto) {
    try{
      const Venta = this.VentaRepository.create
      (createVentaDto);
      await this.VentaRepository.save(Venta);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException(`error al registrar la venta `)
    }
  }

  async findAll() {
    return await this.VentaRepository.find()
  }

  async findOne(id: string) {
    const Venta = await this.VentaRepository.findOneBy({id});
    if(!Venta){
      throw new NotFoundException (`Venta con id ${id} no existe`)
    }
    return Venta;
  }

  update(id: string, updateVentaDto: UpdateVentaDto) {
    return `This action updates a #${id} venta`;
  }

  remove(id: string) {
    return `This action removes a #${id} venta`;
  }
}
