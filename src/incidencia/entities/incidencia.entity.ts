import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "../../usuario/entities/usuario.entity";

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
}