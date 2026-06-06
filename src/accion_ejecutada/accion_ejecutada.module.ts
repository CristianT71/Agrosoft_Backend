import { Module } from '@nestjs/common';
import { AccionEjecutadaService } from './accion_ejecutada.service';
import { AccionEjecutadaController } from './accion_ejecutada.controller';
import { AccionEjecutada } from './entities/accion_ejecutada.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';

@Module({
  controllers: [AccionEjecutadaController],
  providers: [AccionEjecutadaService],

imports:[
  TypeOrmModule.forFeature([AccionEjecutada]),
]
})
export class AccionEjecutadaModule {}
