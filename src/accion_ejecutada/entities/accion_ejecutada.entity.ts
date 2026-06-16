import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { CultivoReal } from '../../cultivo_real/entities/cultivo_real.entity';

@Entity('accion_ejecutada')
export class AccionEjecutada {

@PrimaryColumn({type: 'uuid'})
id: string;

@Column({type: 'date'})
fecha_ejecucion: Date;

@Column({type: 'decimal'})
cantidad_usada: number;

@Column({type: 'decimal'})
costo_aplicado: number;

@Column({type: 'varchar', length: 255})
observaciones: string;

@ManyToOne(() => Usuario, (usuario) => usuario.accionesEjecutadas)
usuario: Usuario;

@ManyToOne(() => CultivoReal, (cultivoReal) => cultivoReal.accionesEjecutadas)
cultivoReal: CultivoReal;
}


