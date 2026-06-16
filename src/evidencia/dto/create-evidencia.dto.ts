import { IsString, IsNotEmpty, IsOptional, IsDateString, IsUUID } from 'class-validator';

export class CreateEvidenciaDto {
  
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

  @IsUUID()
  @IsNotEmpty()
  incidenciaId: string;
}