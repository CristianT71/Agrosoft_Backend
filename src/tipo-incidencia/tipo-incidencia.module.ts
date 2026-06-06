import { Module } from '@nestjs/common';
import { TipoIncidenciaService } from './tipo-incidencia.service';
import { TipoIncidenciaController } from './tipo-incidencia.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoIncidencia } from './entities/tipo-incidencia.entity';

@Module({
  controllers: [TipoIncidenciaController],
  providers: [TipoIncidenciaService],
  imports: [TypeOrmModule.forFeature([TipoIncidencia])]
})
export class TipoIncidenciaModule {}
