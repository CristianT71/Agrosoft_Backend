import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}