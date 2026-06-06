import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccionEjecutadaDto {
  @IsDateString()
  @IsNotEmpty()
  fecha_ejecucion: string;

@IsNumber()
@IsNotEmpty()
cantidad_usada: number;

@IsNumber()
@IsNotEmpty()
costo_aplicado: number;

@IsString()
@IsNotEmpty()
observaciones: string;


}
