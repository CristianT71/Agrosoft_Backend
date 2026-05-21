import { IsNotEmpty, IsString } from "class-validator";


export class CreateInsumoDto {
    @IsString()
    @IsNotEmpty()
        nombre: string;

        @IsString()
        @IsNotEmpty()
        categoria: string;

        @IsString()
        @IsNotEmpty()
        unidad_medida: number;

        @IsString()
        @IsNotEmpty()
        cantidad_disponible: number;

        @IsString()
        @IsNotEmpty()
        precio_unitario: number;

        @IsString()
        @IsNotEmpty()
        estado: string;
}
