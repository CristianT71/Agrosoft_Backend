import { Module } from '@nestjs/common';
import { PlanManejoService } from './plan_manejo.service';
import { PlanManejoController } from './plan_manejo.controller';

@Module({
  controllers: [PlanManejoController],
  providers: [PlanManejoService],
})
export class PlanManejoModule {}
