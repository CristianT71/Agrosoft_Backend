import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlanManejoDto {

    @IsString()
    @IsNotEmpty()
    actividad_sugerida: string;

    @IsNumber()
    @IsNotEmpty()
    orden: number;

    @IsString()
    @IsNotEmpty()
    tiempo_sugerido: string;
    
    @IsNumber()
    @IsNotEmpty()
    cantidad_sugerida: number;

    @IsString()
    @IsNotEmpty()
    unidad_medida: string;
}
