import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tipo_incidencia')
export class TipoIncidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  tipo: string;

  @Column({ type: 'varchar', length: 255 })
  grado_daño: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;
}