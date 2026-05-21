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
    unidad_medida: Decimal128;
    @Column()
    cantidad_disponible: Decimal128;
    @Column()
    precio_unitario: Decimal128;
    @Column()
    estado: string;

}
