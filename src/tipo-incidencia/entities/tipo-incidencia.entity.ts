import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";

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

    @OneToMany(() => Incidencia, (incidencia) => incidencia.tipoIncidencia)
    incidencias: Incidencia[];
}