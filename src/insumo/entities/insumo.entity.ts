import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Insumo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'string' })
    Nombre: string;

    @Column({ type: 'string' })
    Categoria: string;

    @Column({ type: 'string' })
    Unidad_Medida: string;

    @Column({ type: 'number' })
    Cantidad_disponible: number;

    @Column({ type: 'number' })
    Precio_Unitario: number;
    

}
