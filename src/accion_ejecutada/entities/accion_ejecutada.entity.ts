import { Column, Entity } from 'typeorm';

Entity('accion_ejecutada')
export class AccionEjecutada {

@Column({type: 'date'})
fecha_ejecucion: Date;

@Column({type: 'decimal'})
cantidad_usada: number;

@Column({type: 'decimal'})
costo_aplicado: number;

@Column({type: 'string'})
observaciones: string;

}


