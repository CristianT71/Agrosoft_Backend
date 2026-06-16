import { IsString, IsNumber, IsNotEmpty, IsDateString, IsUUID } from 'class-validator';

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
fecha_aplicacion_sugerida: Date;

@IsString()
@IsNotEmpty()
descripcion: string;

@IsNumber()
@IsNotEmpty()
cantidad_sugerida: number;

@IsUUID()
@IsNotEmpty()
id_plan_manejo: string; 

@IsUUID() 
@IsNotEmpty()
id_insumo: string;
}
