import { IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateCultivoBaseDto {
     
        @IsString()
        @IsNotEmpty()
        @MaxLength(150)
        nombre: string;

        @IsString()
        @IsNotEmpty()
        @MaxLength(50)
        tipo: string;

        @IsString()
        @IsOptional()
        descripcion: string;

        @IsString()
        @IsOptional()
        @MaxLength(30)
        estado: string;
}
