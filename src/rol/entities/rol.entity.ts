import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'varchar'})
  nombre: string;
  
  @Column({type: 'varchar'})
  descripcion: string;
  
  @Column({type: 'varchar'})
  estado: string;
}
