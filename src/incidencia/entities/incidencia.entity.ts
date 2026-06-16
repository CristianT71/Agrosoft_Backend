import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { CultivoReal } from "../../cultivo_real/entities/cultivo_real.entity";
import { AccionCorrectiva } from "../../accion_correctiva/entities/accion_correctiva.entity";
import { Evidencia } from "../../evidencia/entities/evidencia.entity";
import { Reporte } from "../../reporte/entities/reporte.entity";
import { TipoIncidencia } from "../../tipo-incidencia/entities/tipo-incidencia.entity";

@Entity()
export class Incidencia {

    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({ type: 'date' })
    fecha: Date;

    @Column({ type: 'enum', enum: ['baja', 'media', 'alta'], default: 'baja'})
    gravedad: string;

    @Column({ type: 'text', nullable: true})
    descripcion: string;
    
    @Column({type: 'enum', enum: ['pendiente', 'en_proceso', 'resuelto'], default: 'pendiente'})
    estado: string;

    //relaciones

    @ManyToOne(() => Usuario, (usuario) => usuario.incidencias, { onDelete: 'CASCADE' })
    usuario: Usuario;

    @ManyToOne(() => CultivoReal, (cultivoReal) => cultivoReal.incidencias)
    cultivoReal: CultivoReal;
    
    @OneToMany(() => AccionCorrectiva, (accionCorrectiva) => accionCorrectiva.incidencia)
    accionesCorrectivas: AccionCorrectiva[];

    @OneToMany(() => Evidencia, (evidencia) => evidencia.incidencia)
    evidencias: Evidencia[];

    @OneToMany(() => Reporte, (reporte) => reporte.incidencia)
    reportes: Reporte[];

    @ManyToOne(() => TipoIncidencia, (tipoIncidencia) => tipoIncidencia.incidencias)
    tipoIncidencia: TipoIncidencia;
}