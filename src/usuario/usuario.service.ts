import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ){}
  async create(createUsuarioDto: CreateUsuarioDto) {
    try{
      const contraseñaHash = await hash(createUsuarioDto.contraseña, 10);
      const usuario = this.usuarioRepository.create({
        ...createUsuarioDto,
        contraseña: contraseñaHash,
      });
      return await this.usuarioRepository.save(usuario);
    } catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error: No se pudo crear el usuario')
    } 
  }

  async findAll() {
    return this.usuarioRepository.find();
  }

  async findOne(id: string) {
    const usuario = await this.usuarioRepository.findOneBy( {id} );
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no existe`)
    }
    return usuario;
  }

  async update(id: string, updateUsuarioDto: UpdateUsuarioDto) {
    if (updateUsuarioDto.contraseña){
      updateUsuarioDto.contraseña = await hash(updateUsuarioDto.contraseña, 10);
    }

    const usuario = await this.usuarioRepository.preload({
      id,
      ...updateUsuarioDto,
    });
    if (!usuario) {
      throw new NotFoundException(`Usuario con id ${id} no existe`);
    }
    try {
      await this.usuarioRepository.save(usuario)
      return usuario;
    } catch (error){
      console.log(error)
      throw new InternalServerErrorException('Error: no se pudo actualizar el usuario')
    }
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    await this.usuarioRepository.remove(usuario);
    return 'Usuario eliminado exitosamente'
  }
}
