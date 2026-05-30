import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoIncidenciaService } from './tipo_incidencia.service';
import { TipoIncidenciaController } from './tipo_incidencia.controller';
import { TipoIncidencia } from './entities/tipo_incidencia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoIncidencia])],
  controllers: [TipoIncidenciaController],
  providers: [TipoIncidenciaService],
  exports: [TypeOrmModule],
})
export class TipoIncidenciaModule {}