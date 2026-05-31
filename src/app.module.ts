import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoIncidenciaModule } from './tipo_incidencia/tipo_incidencia.module';
import { EvidenciaModule } from './evidencia/evidencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
  type: 'postgres',
  host: '127.0.0.1', // Cambiamos 'localhost' por la IP directa para evitar problemas de red
  port: 5433,
  username: 'postgres',
  password: '123', // <--- PON AQUÍ la contraseña real que uses siempre en tu PostgreSQL o pgAdmin
  database: 'agrosoft_db',
  autoLoadEntities: true,
  synchronize: true,
}),
    TipoIncidenciaModule,
    EvidenciaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}