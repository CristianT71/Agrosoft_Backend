import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccionEjecutadaService } from './accion_ejecutada.service';
import { CreateAccionEjecutadaDto } from './dto/create-accion_ejecutada.dto';
import { UpdateAccionEjecutadaDto } from './dto/update-accion_ejecutada.dto';

@Controller('accion-ejecutada')
export class AccionEjecutadaController {
  constructor(private readonly accionEjecutadaService: AccionEjecutadaService) {}

  @Post()
  create(@Body() createAccionEjecutadaDto: CreateAccionEjecutadaDto) {
    return this.accionEjecutadaService.create(createAccionEjecutadaDto);
  }

  @Get()
  findAll() {
    return this.accionEjecutadaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accionEjecutadaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccionEjecutadaDto: UpdateAccionEjecutadaDto) {
    return this.accionEjecutadaService.update(id, updateAccionEjecutadaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accionEjecutadaService.remove(id);
  }
}
