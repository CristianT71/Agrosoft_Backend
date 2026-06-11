import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AccionEjecutada } from "../../accion_ejecutada/entities/accion_ejecutada.entity";

@Entity()
export class CultivoReal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fecha_inicio: string;

    @Column()
    tamaño_lote: string;

    @Column()
    estado: string;

    @OneToMany(() => AccionEjecutada, (accion) => accion.cultivoReal )
    accionesEjecutadas: AccionEjecutada[];
}
