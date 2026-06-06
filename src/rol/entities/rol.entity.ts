import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'string'})
  nombre: string;
  
  @Column({type: 'string'})
  descripcion: string;
  
  @Column({type: 'string'})
  estado: string;
}
