import { IsString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateInsumoDto {

    @IsString()
    @IsNotEmpty()
    Nombre: string;

    @IsString()
    @IsNotEmpty()
    Categoria: string;

    @IsString()
    @IsNotEmpty()
    Unidad_Medida: string;

    @IsNumber()
    @IsNotEmpty()
    Cantidad_disponible: number;
}
