import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Evidencia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'string'})
  tipo_evidencia: string;

  @Column({ type: 'string'})
  archivo_url: string;

  @Column({ type: 'string'})
  descripcion: string; 

  @Column({ type: 'date'})
    fecha_registro: string;

    @Column({ type: 'string'})
    observaciones: string;

    @Column({ type: 'string'})
    resultado_preliminar: string;


}
