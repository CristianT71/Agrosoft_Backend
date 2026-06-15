import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';

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


  //Relacion con usuario
  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  usuarios: Usuario[];
}
