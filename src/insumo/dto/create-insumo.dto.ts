import { IsString, IsNotEmpty } from "class-validator";

export class CreateInsumoDto {

    @IsString()
    @IsNotEmpty()
    Nombre: string;

    @IsString()
    @IsNotEmpty()
    Categoria: string;
}
