import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class PlanManejo {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'string' })
    actividad_sugerida: string;

    @Column({type: 'int'})
    orden: number;

    @Column({type: 'string' })
    tiempo_sugerido: string;

    @Column({ type: 'decimal' })
    cantidad_sugerida: number;

    @Column({ type: 'string' })
    unidad_medida: string;
}
