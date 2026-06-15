import { Module } from '@nestjs/common';
import { ReporteService } from './reporte.service';
import { ReporteController } from './reporte.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reporte } from './entities/reporte.entity';
import { VentaModule } from '../venta/venta.module';

@Module({
  controllers: [ReporteController],
  providers: [ReporteService],
  imports:[
    TypeOrmModule.forFeature([ Reporte ]),
    VentaModule,
  ]
})
export class ReporteModule {}
