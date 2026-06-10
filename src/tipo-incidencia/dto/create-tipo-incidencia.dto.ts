import{ IsString, IsNotEmpty } from 'class-validator';

export class CreateTipoIncidenciaDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    tipo_enfermedad_plaga: string;

    @IsString()
    @IsNotEmpty()
    grado_daño: string;

    @IsString()
    @IsNotEmpty()
    descripcion: string;
}

