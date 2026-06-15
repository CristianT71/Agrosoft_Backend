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
<<<<<<< HEAD
    TypeOrmModule.forFeature([ Reporte ]),
    VentaModule,
=======
    TypeOrmModule.forFeature([Reporte, Venta])
>>>>>>> 54820d12dc144e1117e8a6333f5eab21943bcf6a
  ]
})
export class ReporteModule {}
