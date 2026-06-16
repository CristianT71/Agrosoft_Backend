import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class CreateEvidenciaDto {
  @IsNumber()
  @IsNotEmpty()
  id_incidencia: number; // 👈 Mantenemos tu campo original

  @IsString()
  @IsNotEmpty()
  tipo_evidencia: string;

  @IsString()
  @IsNotEmpty()
  archivo_url: string;

  @IsString()
  @IsOptional()
  descripcion?: string;

  @IsDateString()
  @IsNotEmpty()
  fecha_registro: string;

  @IsString()
  @IsOptional()
  observaciones?: string;

  @IsString()
  @IsOptional()
  resultado_preliminar?: string;
}