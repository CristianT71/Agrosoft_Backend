import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvidenciaService } from './evidencia.service';
import { EvidenciaController } from './evidencia.controller';
import { Evidencia } from './entities/evidencia.entity';
import { IncidenciaModule } from '../incidencia/incidencia.module';

@Module({
  controllers: [EvidenciaController],
  providers: [EvidenciaService],
  imports: [TypeOrmModule.forFeature([Evidencia]),
    IncidenciaModule,
],
  exports: [TypeOrmModule],
})
export class EvidenciaModule {}