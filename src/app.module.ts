import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoIncidenciaModule } from './tipo_incidencia/tipo_incidencia.module';
import { EvidenciaModule } from './evidencia/evidencia.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // o 'mysql'
      host: process.env.DB_HOST || 'localhost',
      // LÍNEA CORREGIDA AQUÍ:
      port: parseInt(process.env.DB_PORT || '5432'), 
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || 'tu_contraseña',
      database: process.env.DB_NAME || 'agrosoft_db',
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