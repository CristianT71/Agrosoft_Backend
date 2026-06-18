import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateCosechaDto {

    @IsNotEmpty()
    @IsDateString()
    fecha_cosecha: Date;

    @IsNumber()
    @IsNotEmpty()
    cantidad_cosechada: number;

    @IsString()
    @IsNotEmpty()
    unidad_medida: string;

    @IsString()
    @IsNotEmpty()
    tipo_cosecha: string;

    @IsString()
    @IsOptional()
    observaciones: string;

    @IsUUID()
    @IsNotEmpty()
    usuarioId: string;

    @IsUUID()
    @IsNotEmpty()
    cultivoRealId: string;
}
