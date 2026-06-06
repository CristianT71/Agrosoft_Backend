import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CultivoBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 150 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    tipo: string;

    @Column({ type: 'text', nullable: true })
    descripcion: string;

    @Column({ type: 'varchar', length: 30, default: 'activo' })
    estado: string;

}
