import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlanManejoService } from './plan_manejo.service';
import { CreatePlanManejoDto } from './dto/create-plan_manejo.dto';
import { UpdatePlanManejoDto } from './dto/update-plan_manejo.dto';

@Controller('plan-manejo')
export class PlanManejoController {
  constructor(private readonly planManejoService: PlanManejoService) {}

  @Post()
  create(@Body() createPlanManejoDto: CreatePlanManejoDto) {
    return this.planManejoService.create(createPlanManejoDto);
  }

  @Get()
  findAll() {
    return this.planManejoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.planManejoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlanManejoDto: UpdatePlanManejoDto) {
    return this.planManejoService.update(+id, updatePlanManejoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.planManejoService.remove(+id);
  }
}
