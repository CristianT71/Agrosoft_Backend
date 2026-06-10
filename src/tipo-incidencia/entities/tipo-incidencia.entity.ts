import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TipoIncidencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar'})
    nombre: string;

    @Column({ type: 'varchar'})
    tipo_enfermedad_plaga: string;

    @Column({ type: 'varchar'})
    grado_daño: string;

    @Column({ type: 'varchar'})
    descripcion: string;

}