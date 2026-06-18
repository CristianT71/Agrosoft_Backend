import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Venta } from "../../venta/entities/venta.entity";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

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
    @JoinColumn({ name: 'venta_id' })
    venta: Venta;

    @ManyToOne(() => Cosecha, (cosecha) => cosecha.reportes)
    @JoinColumn({ name: 'cosecha_id' })
    cosecha: Cosecha;

    @ManyToOne(() => Incidencia, (incidencia) => incidencia.reportes)
    @JoinColumn({ name: 'incidencia_id' })
    incidencia: Incidencia;

    @ManyToOne(() => Usuario, (usuario) => usuario.reportes)
    @JoinColumn({ name: 'usuario_id' })
    usuario: Usuario;
}
