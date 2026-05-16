import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cosecha {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'date' })
    fecha_cosecha: Date;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    cantidad_cosechada: number;

    @Column({ type: 'varchar', length: 50 })
    unidad_medida: string;

    @Column({ type: 'varchar', length: 100 })
    tipo_cosecha: string;

    @Column({ type: 'text', nullable: true })
    observaciones: string;
}
