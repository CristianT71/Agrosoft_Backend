import { Injectable, InternalServerErrorException, NotFoundException} from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolService {

  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}


  async create(createRolDto: CreateRolDto) {
    try {
      const rol = this.rolRepository.create(createRolDto);
      await this.rolRepository.save(rol);
      return rol;
    } catch (error) {
      throw new InternalServerErrorException('Error al crear el rol');
    }
  }

  async findAll() {
    return this.rolRepository.find();
  }

  async findOne(id: string) {
    const rol = await this.rolRepository.findOneBy({ id });
    if (!rol) {
      throw new NotFoundException(`Rol con id ${id} no encontrado`);
    }
    return rol;
  }

  async update(id: string, updateRolDto: UpdateRolDto) {
    const rol = await this.rolRepository.preload({ id, ...updateRolDto });
    if (!rol) {
      throw new NotFoundException(`Rol con id ${id} no encontrado`);
    }

    try {
      return await this.rolRepository.save(rol);
    } catch (error) {
      throw new InternalServerErrorException('Error: no se pudo actualizar el rol');
    }
  }

  async remove(id: string) {
    const rol = await this.findOne(id);
    await this.rolRepository.remove(rol);
    return `Rol con id ${id} eliminado correctamente`;

  }
}
