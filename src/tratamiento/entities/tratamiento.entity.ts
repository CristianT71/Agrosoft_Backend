import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlanManejo } from '../../plan_manejo/entities/plan_manejo.entity';

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

    //Estas son las relaciones => Plan de manejo "De una A muchas" Tratamientos
    @ManyToOne(() => PlanManejo, (planManejo) => planManejo.tratamientos)
    PlanManejo: PlanManejo;
}
