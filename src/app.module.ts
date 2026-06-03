import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccionCorrectivaModule } from './accion_correctiva/accion_correctiva.module';
import { AccionEjecutadaModule } from './accion_ejecutada/accion_ejecutada.module';
import { TratamientoModule} from './tratamiento/tratamiento.module';

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
    AccionCorrectivaModule,
    AccionEjecutadaModule,
    TratamientoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
