import { Column, Entity, ManyToOne } from "typeorm";
import { Venta } from "../../venta/entities/venta.entity";

@Entity()
export class Reporte {
    id:string;

    @Column()
    tipo_reporte: string;

    @Column()
    fecha_creacion: string;

    @Column()
    formato_reporte: string;
    

    @ManyToOne(() => Venta, (venta) => venta.reportes, {onDelete :'CASCADE'})
    venta: Venta;
}
