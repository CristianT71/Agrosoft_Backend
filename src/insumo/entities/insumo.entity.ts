import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Insumo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    @Column()
    categoria: string;
    @Column()
    unidad_medida: string;
    @Column()
    cantidad_disponible: string;
    @Column()
    precio_unitario: string;
    @Column()
    estado: string;

}