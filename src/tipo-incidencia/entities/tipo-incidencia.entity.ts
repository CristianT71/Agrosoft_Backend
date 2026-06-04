import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class TipoIncidencia {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'string'})
    nombre: string;

    @Column({ type: 'string'})
    tipo_enfermedad_plaga: string;

    @Column({ type: 'string'})
    grado_daño: string;

    @Column({ type: 'string'})
    descripcion: string;

}