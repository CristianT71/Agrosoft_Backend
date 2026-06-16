import { Module } from '@nestjs/common';
import { PlanManejoService } from './plan_manejo.service';
import { PlanManejoController } from './plan_manejo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanManejo } from './entities/plan_manejo.entity';
import { CultivoBaseModule } from '../cultivo_base/cultivo_base.module';
import { TratamientoModule } from '../tratamiento/tratamiento.module';

@Module({
  controllers: [PlanManejoController],
  providers: [PlanManejoService],
  imports: [
    TypeOrmModule.forFeature([PlanManejo]),
    CultivoBaseModule,
  ],
  exports: [TypeOrmModule]
})
export class PlanManejoModule {}
