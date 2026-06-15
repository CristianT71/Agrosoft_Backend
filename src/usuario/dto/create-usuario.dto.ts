import { IsEmail, IsNotEmpty, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";
import { UUID } from "typeorm/driver/mongodb/bson.typings.js";

export class CreateUsuarioDto {
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(150)
    nombre: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(150)
    correo: string

    @IsString()
    @MinLength(8, { message: 'La contraseña debe tener al menos 8 caracteres' })
    contraseña: string;

    @IsString()
    @IsOptional()
    @MaxLength(20)
    estado?: string;
    
    @IsString()
    @IsOptional()
    @MaxLength(20)
    telefono?: string;

    @IsUUID()
    @IsNotEmpty()
    rolId: string;
}