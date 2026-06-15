import { IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Reporte } from "../../reporte/entities/reporte.entity";

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
}
