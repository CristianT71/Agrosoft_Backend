import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn('uuid')

    @Column()
    fecha_venta: string;

    @Column()
    cantidad_vendida: string;

    @Column()
    precio_unitario: string;

    @Column()
    ingreso_total: string;

    @Column()
    forma_pago: string;

    @Column()
    estado_pago: string;
}
