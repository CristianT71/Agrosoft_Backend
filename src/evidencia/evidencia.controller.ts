import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { EvidenciaService } from './evidencia.service';
import { CreateEvidenciaDto } from './dto/create-evidencia.dto';

@Controller('evidencia')
export class EvidenciaController {
  constructor(private readonly evidenciaService: EvidenciaService) {}

  @Post()
  crear(@Body() createEvidenciaDto: CreateEvidenciaDto) {
    return this.evidenciaService.crear(createEvidenciaDto);
  }

  @Get()
  obtenerTodas() {
    return this.evidenciaService.obtenerTodas();
  }

  @Get('incidencia/:idIncidencia')
  obtenerPorIncidencia(@Param('idIncidencia', ParseIntPipe) idIncidencia: string) {
    return this.evidenciaService.obtenerPorIncidencia(idIncidencia);
  }
}