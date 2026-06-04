import {IsString, IsNotEmpty,} from 'class-validator';

export class CreateEvidenciaDto {
  @IsString()
  @IsNotEmpty()
  tipo_evidencia: string;

  @IsString()
  @IsNotEmpty()
  archivo_url: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  fecha_registro: string;

  @IsString()
  observaciones: string;

  @IsString()
  @IsNotEmpty()
  resultado_preliminar: string;
}
