import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
import { Rol } from "../../rol/entities/rol.entity";

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

    @OneToMany(() => Incidencia, (incidencia) => incidencia.usuarios )
    incidencias: Incidencia[];

    @ManyToOne(() => Rol, (rol) => rol.usuarios)
    rol: Rol;
}