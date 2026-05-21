import { IsNotEmpty, IsString } from "class-validator";


export class CreateVentaDto {
    @IsString()
    @IsNotEmpty()
    fecha_venta: string;

    @IsString()
    @IsNotEmpty()
    cantidad_vendida: string;

    @IsString()
    @IsNotEmpty()
    precio_unitario: string;

    @IsString()
    @IsNotEmpty()
    ingreso_total: string;

    @IsString()
    @IsNotEmpty()

    @IsString()
    @IsNotEmpty()

}
