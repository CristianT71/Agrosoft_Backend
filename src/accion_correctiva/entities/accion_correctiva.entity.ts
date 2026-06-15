import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm"
import { PlanManejo } from "../../plan_manejo/entities/plan_manejo.entity";
import { Insumo } from "../../insumo/entities/insumo.entity";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

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

@ManyToOne (() => Insumo, Insumo => Insumo.accionCorrectiva)
@JoinColumn({name: 'insumo_id'})
insumo: Insumo;

@ManyToOne(() => Incidencia, Incidencia => Incidencia.accionCorrectiva)
@JoinColumn({name: 'incidencia_id'})
incidencia: Incidencia;

@ManyToOne(() => Usuario, Usuario => Usuario.accionCorrectiva)
@JoinColumn({name: 'usuario_id'})
usuario: Usuario;

}
