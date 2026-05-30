import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Incidencia } from '../incidencia/incidencia.entity'; // Ajusta la ruta según tu proyecto

@Entity('evidencia')
export class Evidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  id_incidencia: number;

  @Column({ type: 'varchar', length: 255 })
  tipo_evidencia: string;

  @Column({ type: 'varchar', length: 500 })
  archivo_url: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @Column({ type: 'date' })
  fecha_registro: Date;

  @Column({ type: 'text', nullable: true })
  observaciones: string;

  @Column({ type: 'text', nullable: true })
  resultado_preliminar: string;

  // Relación muchas evidencias pertenecen a una incidencia
  @ManyToOne(() => Incidencia, (incidencia) => incidencia.evidencias, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'id_incidencia' })
  incidencia: Incidencia;
}