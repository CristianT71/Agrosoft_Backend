import { IsString } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reporte } from "../../reporte/entities/reporte.entity";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";

@Entity()
export class Venta {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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
    
    @OneToMany(() => Reporte, (reporte) => reporte.venta)
    reportes: Reporte[];

    @ManyToOne(() => Cosecha, (cosecha) => cosecha.ventas)
    cosecha: Cosecha;
}
