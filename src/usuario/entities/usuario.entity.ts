import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
import { AccionEjecutada } from "../../accion_ejecutada/entities/accion_ejecutada.entity";
import { AccionCorrectiva } from "../../accion_correctiva/entities/accion_correctiva.entity";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({type: 'varchar', length: 150})
    nombre: string;

    @Column({type: 'varchar', length: 150, unique: true})
    correo: string;

    @Column({type: 'varchar', length: 255, select: false})
    contraseña: string;

    @Column({type: 'enum', enum: ['activo', 'inactivo', 'suspendido'], default: 'activo'})
    estado: string;
    
    @Column({type: 'varchar', length: 20, nullable: true})
    telefono: string;

    // Relaciones 

    @OneToMany(() => Cosecha, (cosecha) => cosecha.usuario )
    cosechas: Cosecha[];

    @OneToMany(() => Incidencia, (incidencia) => incidencia.usuario )
    incidencias: Incidencia[];

    @OneToMany(() => AccionEjecutada, (accion) => accion.usuario )
    accionesEjecutadas: AccionEjecutada[];

    @OneToMany(() => AccionCorrectiva, (accionCorrectiva) => accionCorrectiva.usuario )
    accionesCorrectivas: AccionCorrectiva[];
}