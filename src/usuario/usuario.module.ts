import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Cosecha } from '../cosecha/entities/cosecha.entity';
import { Incidencia } from '../incidencia/entities/incidencia.entity';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [
    TypeOrmModule.forFeature([ Usuario, Cosecha, Incidencia ])
  ],
  exports: [UsuarioService]
})
export class UsuarioModule {}
