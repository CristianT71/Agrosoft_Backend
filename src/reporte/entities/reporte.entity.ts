import { Column, Entity } from "typeorm";

@Entity()
export class Reporte {
    id:string;

    @Column()
    tipo_reporte: string;

    @Column()
    fecha_creacion: string;

    @Column()
    formato_reporte: string;
}
