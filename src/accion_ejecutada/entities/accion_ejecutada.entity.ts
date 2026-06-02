import { Column, Entity, PrimaryColumn } from 'typeorm';

Entity('accion_ejecutada')
export class AccionEjecutada {

@PrimaryColumn({type: 'uuid'})
id: string;

@Column({type: 'date'})
fecha_ejecucion: Date;

@Column({type: 'decimal'})
cantidad_usada: number;

@Column({type: 'decimal'})
costo_aplicado: number;

@Column({type: 'string'})
observaciones: string;

}


