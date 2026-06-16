import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm"
import { PlanManejo } from "../../plan_manejo/entities/plan_manejo.entity";
import { Insumo } from "../../insumo/entities/insumo.entity";
import { Incidencia } from "../../incidencia/entities/incidencia.entity";
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

@ManyToOne (() => Insumo, (insumo) => insumo.accionesCorrectivas)
@JoinColumn({name: 'insumo_id'})
insumo: Insumo;

@ManyToOne(() => Incidencia, (incidencia) => incidencia.accionesCorrectivas)
@JoinColumn({name: 'incidencia_id'})
incidencia: Incidencia;

@ManyToOne(() => Usuario, (usuario) => usuario.accionesCorrectivas)
@JoinColumn({name: 'usuario_id'})
usuario: Usuario;

}
