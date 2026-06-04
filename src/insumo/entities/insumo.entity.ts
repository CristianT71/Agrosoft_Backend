import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Insumo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'string' })
    Nombre: string;

    

}
