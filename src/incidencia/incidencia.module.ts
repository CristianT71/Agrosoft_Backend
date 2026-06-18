import { Module } from '@nestjs/common';
import { IncidenciaService } from './incidencia.service';
import { IncidenciaController } from './incidencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incidencia } from './entities/incidencia.entity';
import { UsuarioModule } from '../usuario/usuario.module';
import { CultivoRealModule } from '../cultivo_real/cultivo_real.module';
import { TipoIncidenciaModule } from '../tipo-incidencia/tipo-incidencia.module';

@Module({
  controllers: [IncidenciaController],
  providers: [IncidenciaService],
  imports: [
    TypeOrmModule.forFeature([ Incidencia ]),
    UsuarioModule,
    CultivoRealModule,
    TipoIncidenciaModule,
  ],
  exports: [TypeOrmModule]
})
export class IncidenciaModule {}
