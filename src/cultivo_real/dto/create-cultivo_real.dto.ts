import { IsNotEmpty, IsString } from "class-validator";


export class CreateCultivoRealDto {
    @IsString()
    @IsNotEmpty()
    fecha_inicio: string;

    @IsString()
    @IsNotEmpty()
    tamaño_lote: string;

    @IsString()
    @IsNotEmpty()
    estado: string;

}
