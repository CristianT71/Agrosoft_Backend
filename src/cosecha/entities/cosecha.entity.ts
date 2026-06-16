import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { CultivoReal } from "../../cultivo_real/entities/cultivo_real.entity";
import { Venta } from "../../venta/entities/venta.entity";
import { Reporte } from "../../reporte/entities/reporte.entity";

@Entity()
export class Cosecha {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date' })
    fecha_cosecha: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cantidad_cosechada: number;

    @Column({ type: 'varchar', length: 50 })
    unidad_medida: string;

    @Column({ type: 'varchar', length: 100 })
    tipo_cosecha: string;

    @Column({ type: 'text', nullable: true })
    observaciones: string;

    //Relaciones

    @ManyToOne(() => Usuario, (usuario) => usuario.cosechas, { onDelete: 'CASCADE' }) //onDelete: 'CASCADE' si un usuario se borra tambien sus cosechas registradas
    usuario: Usuario;

    @ManyToOne(() => CultivoReal, (cultivoReal) => cultivoReal.cosechas)
    cultivoReal: CultivoReal;

    @OneToMany(() => Venta, (venta) => venta.cosecha)
    ventas: Venta[];

    @OneToMany(() => Reporte, (reporte) => reporte.cosecha)
    reportes: Reporte[];
}
