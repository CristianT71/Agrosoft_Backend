import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { OneToMany } from "typeorm";
import { Tratamiento } from "../../tratamiento/entities/tratamiento.entity";
import { AccionCorrectiva } from "../../accion_correctiva/entities/accion_correctiva.entity";

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

@OneToMany(() => Tratamiento, tratamiento => tratamiento.insumos)
tratamientos: Tratamiento[];

@OneToMany(() => AccionCorrectiva, accionCorrectiva => accionCorrectiva.insumo)
accionesCorrectivas: AccionCorrectiva[];

}