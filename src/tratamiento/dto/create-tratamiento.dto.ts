import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';
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

@IsDate()
@IsNotEmpty()
fecha_aplicacion_sugerida: Date;

@IsString()
@IsNotEmpty()
descripcion: string;

@IsNumber()
@IsNotEmpty()
cantidad_sugerida: number;
}
