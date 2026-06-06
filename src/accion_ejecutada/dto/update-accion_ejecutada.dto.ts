import { PartialType } from '@nestjs/mapped-types';
import { CreateAccionEjecutadaDto } from './create-accion_ejecutada.dto';

export class UpdateAccionEjecutadaDto extends PartialType(CreateAccionEjecutadaDto) {}
