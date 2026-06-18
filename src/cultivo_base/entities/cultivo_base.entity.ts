import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PlanManejo } from "../../plan_manejo/entities/plan_manejo.entity";
import { CultivoReal } from "../../cultivo_real/entities/cultivo_real.entity";

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

    //Relaciones que les pongo
    @OneToMany(() => PlanManejo, (planManejo) => planManejo.cultivoBase)
    planesManejo: PlanManejo[];

    @OneToMany(() => CultivoReal, (cultivoReal) => cultivoReal.cultivoBase)
    cultivosReales: CultivoReal[];

}
