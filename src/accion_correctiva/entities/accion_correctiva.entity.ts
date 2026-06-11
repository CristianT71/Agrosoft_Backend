import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm"
import { PlanManejo } from "../../plan_manejo/entities/plan_manejo.entity";

@Entity('accion_correctiva')
export class AccionCorrectiva {

@PrimaryColumn({type: 'uuid'})
id: string;

@Column({type: 'varchar', length: 255})
accion: string;

@Column({type: 'date'})
fecha_atencion: Date;

@Column({type:'decimal'})
cantidad_usada: number;

@Column({type:'decimal'})
costo_aplicado: number;

@Column({type: 'varchar', length: 255})
resultado_preeliminar: string;

@ManyToOne (() => PlanManejo, planManejo => planManejo.accionCorrectiva)
@JoinColumn({name: 'plan_manejo_id'})
planManejo: PlanManejo;

}
