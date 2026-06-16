import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Incidencia } from '../../incidencia/entities/incidencia.entity'; // Asegúrate de que la ruta sea la correcta

@Entity('evidencia')
export class Evidencia {
  @PrimaryGeneratedColumn()
  id: number;

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

  // 🛠️ AQUÍ SE PONE EL DECORADOR MANYTOONE COMO TE LO PIDIERON:
  @ManyToOne(() => Incidencia, { onDelete: 'CASCADE' }) // 👈 Quitamos el mapeo inverso (incidencia) => incidencia.evidencias
@JoinColumn({ name: 'id_incidencia' })
incidencia: Incidencia;
}