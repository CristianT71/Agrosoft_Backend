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
cultivoRealId: string;

@IsUUID()
@IsNotEmpty()
usuarioId: string;

}
