import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Venta } from "../../venta/entities/venta.entity";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";

@Entity()
export class Reporte {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    tipo_reporte: string;

    @Column()
    fecha_creacion: string;

    @Column()
    formato_reporte: string;
    

    @ManyToOne(() => Venta, (venta) => venta.reportes, {onDelete :'CASCADE'})
    venta: Venta;

    @ManyToOne(() => Cosecha, (cosecha) => cosecha.reportes)
    cosecha: Cosecha;
}
