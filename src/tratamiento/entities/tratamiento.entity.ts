
import { Column, Entity, JoinColumn,ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import {PlanManejo} from '../../plan_manejo/entities/plan_manejo.entity';
import { Insumo } from '../../insumo/entities/insumo.entity';

@Entity()
export class Tratamiento {
@PrimaryGeneratedColumn('uuid')
id: string;

@Column({type: 'varchar', length: 255})
actividad_sugerida: string;

@Column({type: 'int'})
orden: number;

@Column({type: 'varchar', length: 255})
tipo_tratatmiento: string;

@Column({type:'date'})
fecha_aplicacion_sugerida: Date;

@Column({type: 'varchar', length: 255})
descripcion: string;

@Column({type:'decimal'})
cantidad_sugerida: number;

@ManyToOne(() => PlanManejo, plan_manejo => plan_manejo.tratamientos)
@JoinColumn({name: 'plan_manejo_id'})
planesManejo: PlanManejo[];

@ManyToOne(() => Insumo, insumo => insumo.tratamientos)
@JoinColumn({name: 'insumo_id'})
insumos: Insumo[];
}
