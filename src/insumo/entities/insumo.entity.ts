import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Decimal128 } from "typeorm/browser";

@Entity()
export class Insumo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    nombre: string;
    @Column()
    categoria: string;
    @Column()
    unidad_medida: number;
    @Column()
    cantidad_disponible: number;
    @Column()
    precio_unitario: number;
    @Column()
    estado: string;

}
