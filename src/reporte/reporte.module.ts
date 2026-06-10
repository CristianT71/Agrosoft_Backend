import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { Venta } from '../venta/entities/venta.entity';

@Module({
  controllers: [ReporteController],
  providers: [ReporteService],
  imports:[
    TypeOrmModule.forFeature([Reporte, Venta])
  ]
})
export class ReporteModule {}
