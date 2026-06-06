import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { IncidenciaModule } from './incidencia/incidencia.module';
import { CosechaModule } from './cosecha/cosecha.module';
import { CultivoBaseModule } from './cultivo_base/cultivo_base.module';
import { EvidenciaModule } from './evidencia/evidencia.module';
import { TipoIncidencia } from './tipo-incidencia/entities/tipo-incidencia.entity';
import { Rol } from './rol/entities/rol.entity';
import { CultivoReal } from './cultivo_real/entities/cultivo_real.entity';
import { Insumo } from './insumo/entities/insumo.entity';
import { Reporte } from './reporte/entities/reporte.entity';
import { Venta } from './venta/entities/venta.entity';
import { PlanManejo } from './plan_manejo/entities/plan_manejo.entity';
import { AccionCorrectiva } from './accion_correctiva/entities/accion_correctiva.entity';
import { AccionEjecutada } from './accion_ejecutada/entities/accion_ejecutada.entity';
import { Tratamiento } from './tratamiento/entities/tratamiento.entity';
import { ConfigModule } from '@nestjs/config';

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
    UsuarioModule,
    IncidenciaModule,
    CosechaModule,
    CultivoBaseModule,
    EvidenciaModule,
    TipoIncidencia,
    Rol,
    CultivoReal,
    Insumo,
    Reporte,
    Venta,
    PlanManejo,
    AccionCorrectiva,
    AccionEjecutada,
    Tratamiento
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}