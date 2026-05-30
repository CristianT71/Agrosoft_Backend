import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Incidencia } from '../incidencia/incidencia.entity'; // Ajusta la ruta según tu proyecto

@Entity('tipo_incidencia')
export class TipoIncidencia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column({ type: 'varchar', length: 255 })
  tipo: string; // Ejemplo: enfermedad, plaga

  @Column({ type: 'varchar', length: 255 })
  grado_daño: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  // Relación uno a muchos con Incidencia (un tipo puede estar en muchas incidencias)
  @OneToMany(() => Incidencia, (incidencia) => i.tipoIncidencia)
  incidencias: Incidencia[];
}