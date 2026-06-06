import { IsString, IsNumber, IsDateString, IsNotEmpty } from 'class-validator';
export class CreateTratamientoDto {

@IsString()
@IsNotEmpty()
actividad_sugerida: string;

@IsNumber()
@IsNotEmpty()
orden: number;

@IsString()
@IsNotEmpty()
tipo_tratamiento: string;

@IsDateString()
@IsNotEmpty()
fecha_aplicacion_sugerida: string;

@IsString()
@IsNotEmpty()
descripcion: string;

@IsNumber()
@IsNotEmpty()
cantidad_sugerida: number;
}
