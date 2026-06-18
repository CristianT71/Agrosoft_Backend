import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";

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

@IsUUID()
@IsNotEmpty()
insumoId: string;

@IsUUID()
@IsNotEmpty()
incidenciaId: string;

@IsUUID()
@IsNotEmpty()
usuarioId: string;

}
