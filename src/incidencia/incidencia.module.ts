import { Module } from '@nestjs/common';
import { IncidenciaService } from './incidencia.service';
import { IncidenciaController } from './incidencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidencia } from './entities/incidencia.entity';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  controllers: [IncidenciaController],
  providers: [IncidenciaService],
  imports: [
    TypeOrmModule.forFeature([ Incidencia ]),
    UsuarioModule,
  ]
})
export class IncidenciaModule {}
