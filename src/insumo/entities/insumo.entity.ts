import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Insumo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

}
