import { Inject, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateCosechaDto } from './dto/create-cosecha.dto';
import { UpdateCosechaDto } from './dto/update-cosecha.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { CultivoReal } from '../cultivo_real/entities/cultivo_real.entity';

@Injectable()
export class CosechaService {
  constructor(
    @InjectRepository(Cosecha)
    private readonly cosechaRepository: Repository<Cosecha>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,

    @InjectRepository(CultivoReal)
    private readonly cultivoRealRepository: Repository<CultivoReal>
  ){}

  async create(createCosechaDto: CreateCosechaDto) {
    const { usuarioId, cultivoRealId,...datosCosecha } = createCosechaDto; //extrae el id del usuaro

    const usuario = await this.usuarioRepository.findOneBy({ id: usuarioId });  //validar si usuario existe antes de registrar
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${usuarioId} no existe`)
    }

    const cultivoReal = await this.cultivoRealRepository.findOneBy({ id: cultivoRealId });
    if (!cultivoReal) {
      throw new NotFoundException(`Cultivo con id ${cultivoRealId} no existe`)
    }

    try {
      const cosecha = this.cosechaRepository.create({
        ...datosCosecha,
        usuario,
        cultivoReal,
      });
      return await this.cosechaRepository.save(cosecha);
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: No se pudo crear cosecha')
    }
  }

  async findAll() {
    return this.cosechaRepository.find({
      relations: ['usuario'],   //informacion de los usuario que crearon 
    });
  }

  async findOne(id: string) {
    const cosecha = await this.cosechaRepository.findOne({
      where: { id },
      relations: ['usuario']
    })
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
