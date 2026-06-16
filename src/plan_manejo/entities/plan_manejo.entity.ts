import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { CultivoBase } from "../../cultivo_base/entities/cultivo_base.entity";
import { Tratamiento } from "../../tratamiento/entities/tratamiento.entity";  

@Entity()

export class PlanManejo {

@PrimaryGeneratedColumn('uuid')
id: string;

@Column({ type: 'varchar' })
actividad_sugerida: string;

@Column({type: 'int'})
orden: number;

@Column({type: 'varchar' })
tiempo_sugerido: string;

@Column({ type: 'decimal' })
cantidad_sugerida: number;

@Column({ type: 'varchar' })
unidad_medida: string;

@OneToMany(() => Tratamiento, tratamiento => tratamiento.planesManejo)
tratamientos: Tratamiento[];

//Estas son las relaciones =>Cultivo base "De una A muchas" Plan de manejo
@ManyToOne(() => CultivoBase, (cultivoBase) => cultivoBase.planesManejo)
cultivoBase: CultivoBase;
}
