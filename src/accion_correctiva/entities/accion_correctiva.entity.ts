import { Column, Entity, PrimaryColumn} from "typeorm"

Entity('accion_correctiva')
export class AccionCorrectiva {

@PrimaryColumn({type: 'uuid'})
id: string;

@Column({type: 'string'})
accion: string;

@Column({type: 'date'})
fecha_atencion: Date;

@Column({type:'decimal'})
cantidad_usada: number;

@Column({type:'decimal'})
costo_aplicado: number;

@Column({type: 'string'})
resultado_preeliminar: string;

}
