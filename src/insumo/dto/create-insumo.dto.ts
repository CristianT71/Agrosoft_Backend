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
        unidad_medida: string;

        @IsString()
        @IsNotEmpty()
        cantidad_disponible: string;

        @IsString()
        @IsNotEmpty()
        precio_unitario: string;

        @IsString()
        @IsNotEmpty()
        estado: string;
}
