import { Module } from '@nestjs/common';
import { PlanManejoService } from './plan_manejo.service';
import { PlanManejoController } from './plan_manejo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanManejo } from './entities/plan_manejo.entity';

@Module({
  controllers: [PlanManejoController],
  providers: [PlanManejoService],
  imports:
  [TypeOrmModule.forFeature([PlanManejo])]
})
export class PlanManejoModule {}
