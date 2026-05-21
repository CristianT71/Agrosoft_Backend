import { Module } from '@nestjs/common';
import { VentaService } from './venta.service';
import { VentaController } from './venta.controller';

@Module({
  controllers: [VentaController],
  providers: [VentaService],
  imports:[
    type
  ]
})
export class VentaModule {}
