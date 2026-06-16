import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { CosechaModule } from '../cosecha/cosecha.module';
import { IncidenciaModule } from '../incidencia/incidencia.module';
import { RolModule } from '../rol/rol.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService],
  imports: [
    TypeOrmModule.forFeature([ Usuario ]),
    IncidenciaModule,
    RolModule,
  ],
  exports: [TypeOrmModule]
})
export class UsuarioModule {}
