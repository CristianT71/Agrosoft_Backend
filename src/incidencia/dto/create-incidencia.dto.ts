import { IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateIncidenciaDto {
    
    @IsNotEmpty()
    @IsDateString()
    fecha: Date;

    @IsNotEmpty()
    @IsEnum(['baja', 'media', 'alta'], { message: 'La gravedad debe ser: baja, media o alta' })
    gravedad: string;

    @IsOptional()
    @IsString()
    descripcion?: string;
    
    @IsOptional()
    @IsEnum(['pendiente', 'en_proceso', 'resuelto'], { message: 'El estado debe ser: pendiente, en_proceso o resuelto' })
    estado?: string;
}

