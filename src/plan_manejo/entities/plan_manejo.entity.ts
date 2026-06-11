import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm";
import { Tratamiento } from "../../tratamiento/entities/tratamiento.entity";    
import { AccionCorrectiva } from "../../accion_correctiva/entities/accion_correctiva.entity";


@Entity()

export class PlanManejo {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column({ type: 'varchar' })
actividad_sugerida: string;

@Column({type: 'int'})
orden: number;

@Column({type: 'varchar' })
tiempo_sugerido: string;

@Column({ type: 'decimal' })
cantidad_sugerida: number;

@Column({ type: 'varchar' })
unidad_medida: string;

@OneToMany(() => Tratamiento, tratamiento => tratamiento.planesManejo)
tratamientos: Tratamiento[];

@OneToMany(() => AccionCorrectiva, accionCorrectiva => accionCorrectiva.planManejo)
accionCorrectiva: AccionCorrectiva[];
}
