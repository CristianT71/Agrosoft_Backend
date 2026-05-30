import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { TipoIncidenciaService } from './tipo_incidencia.service';
import { CreateTipoIncidenciaDto } from './dto/create-tipo_incidencia.dto';

@Controller('tipo-incidencia')
export class TipoIncidenciaController {
  constructor(private readonly tipoIncidenciaService: TipoIncidenciaService) {}

  @Post()
  crear(@Body() createTipoIncidenciaDto: CreateTipoIncidenciaDto) {
    return this.tipoIncidenciaService.crear(createTipoIncidenciaDto);
  }

  @Get()
  obtenerTodos() {
    return this.tipoIncidenciaService.obtenerTodos();
  }

  @Get(':id')
  obtenerUno(@Param('id', ParseIntPipe) id: number) {
    return this.tipoIncidenciaService.obtenerUno(id);
  }
}