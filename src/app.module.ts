import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EvidenciaModule } from './evidencia/evidencia.module';
import { RolModule } from './rol/rol.module';
import { TipoIncidenciaModule } from './tipo-incidencia/tipo-incidencia.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    EvidenciaModule,
    RolModule,
    TipoIncidenciaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
