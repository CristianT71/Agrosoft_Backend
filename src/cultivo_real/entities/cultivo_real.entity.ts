import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CultivoReal {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    fecha_inicio: string;

    @Column()
    tamaño_lote: string;

    @Column()
    estado: string;
}
