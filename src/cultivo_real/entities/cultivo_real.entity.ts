import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
import { AccionEjecutada } from "../../accion_ejecutada/entities/accion_ejecutada.entity";
import { Cosecha } from "../../cosecha/entities/cosecha.entity";
import { CultivoBase } from "../../cultivo_base/entities/cultivo_base.entity";

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
    
    //Relaciones
    @OneToMany(() => Incidencia, (incidencia) => incidencia.cultivoReal)
    incidencias: Incidencia[];

    @OneToMany(() => AccionEjecutada, (accion) => accion.cultivoReal )
    accionesEjecutadas: AccionEjecutada[];

    @OneToMany(() => Cosecha, (cosecha) => cosecha.cultivoReal)
    cosechas: Cosecha[];

    @ManyToOne(() => CultivoBase, (cultivoBase) => cultivoBase.cultivosReales)
    cultivoBase: CultivoBase;
}
