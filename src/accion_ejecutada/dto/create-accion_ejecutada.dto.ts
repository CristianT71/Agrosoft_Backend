import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateAccionEjecutadaDto {
@IsDate()
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


}
