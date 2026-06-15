import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { PlanManejoModule } from '../plan_manejo/plan_manejo.module';

@Module({
  controllers: [TratamientoController],
  providers: [TratamientoService],

imports: [
    TypeOrmModule.forFeature([Tratamiento]),
    PlanManejoModule,
  ],
  exports: [TypeOrmModule],
})
export class TratamientoModule {}
