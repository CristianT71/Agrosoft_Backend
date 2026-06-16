import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { PlanManejoModule } from '../plan_manejo/plan_manejo.module';
import {InsumoModule} from '../insumo/insumo.module';

@Module({
  controllers: [TratamientoController],
  providers: [TratamientoService],
  exports: [TratamientoService],

imports: [
    TypeOrmModule.forFeature([Tratamiento]),
    PlanManejoModule,
    InsumoModule
  ],
})
export class TratamientoModule {}
