import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTipoIncidenciaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  tipo: string;

  @IsString()
  @IsNotEmpty()
  grado_daño: string;

  @IsString()
  @IsOptional()
  descripcion?: string;
}