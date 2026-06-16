import { IsNotEmpty, IsString, IsUUID } from "class-validator";


export class CreateReporteDto {
    @IsString()
    @IsNotEmpty()
    tipo_reporte: string;

    @IsString()
    @IsNotEmpty()
    fecha_creacion: string;

    @IsString()
    @IsNotEmpty()
    formato_reporte: string;

    @IsUUID()
    @IsNotEmpty()
    ventaId: string;

    @IsUUID()
    @IsNotEmpty()
    cosechaId: string;
}

