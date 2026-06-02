import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Tratamiento {

    @PrimaryColumn({type: 'uuid'})
    id: string;

    @Column({type: 'string'})
    actividad_sugerida: string;

    @Column({type: 'int'})
    orden: number;

    @Column({type: 'string'})
    tipo_tratatmiento: string;

    @Column({type:'date'})
    fecha_aplicacion_sugerida: Date;

    @Column({type: 'string'})
    descripcion: string;

    @Column({type:'decimal'})
    cantidad_sugerida: number;
}
