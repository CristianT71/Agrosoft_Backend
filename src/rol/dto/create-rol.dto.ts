import { IsString, IsNotEmpty } from 'class-validator';

export class CreateRolDto {
    
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  descripcion: string;

  @IsString()
  @IsNotEmpty()
  estado: string;
}
