import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Incidencia } from '../incidencia/incidencia.entity'; // Ajusta la ruta cuando crees Incidencia

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

  @OneToMany(() => Incidencia, (incidencia) => incidencia.tipoIncidencia)
  incidencias: Incidencia[];
}