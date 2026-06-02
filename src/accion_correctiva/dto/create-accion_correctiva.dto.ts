import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAccionCorrectivaDto {

@IsString()
@IsNotEmpty()
accion: string;

@IsNotEmpty()
fecha_atencion: Date;

@IsNumber()
@IsNotEmpty()
cantidad_usada: number;

@IsNumber()
@IsNotEmpty()
costo_aplicado: number;

@IsString()
@IsNotEmpty()
resultado_preeliminar: string;
}
