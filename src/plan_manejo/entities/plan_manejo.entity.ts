import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class PlanManejo {
    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar' })
    actividad_sugerida: string;

    @Column({type: 'int'})
    orden: number;

    @Column({type: 'varchar' })
    tiempo_sugerido: string;

    @Column({ type: 'decimal' })
    cantidad_sugerida: number;

    @Column({ type: 'varchar' })
    unidad_medida: string;
}
