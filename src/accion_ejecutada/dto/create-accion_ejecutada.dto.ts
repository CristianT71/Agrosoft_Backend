
import { IsDateString, IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

export class CreateAccionEjecutadaDto {
@IsDateString()
@IsNotEmpty()
fecha_ejecucion: Date;

@IsNumber()
@IsNotEmpty()
cantidad_usada: number;

@IsNumber()
@IsNotEmpty()
costo_aplicado: number;

@IsString()
@IsNotEmpty()
observaciones: string;

@IsUUID()   
@IsNotEmpty()
id_cultivo_real: string;

@IsUUID()
@IsNotEmpty()
id_usuario: string;

}
