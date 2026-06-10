import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { IncidenciaModule } from './incidencia/incidencia.module';
import { CosechaModule } from './cosecha/cosecha.module';
import { CultivoBaseModule } from './cultivo_base/cultivo_base.module';
import { EvidenciaModule } from './evidencia/evidencia.module';
import { TipoIncidenciaModule } from './tipo-incidencia/tipo-incidencia.module';
import { RolModule } from './rol/rol.module';
import { CultivoRealModule } from './cultivo_real/cultivo_real.module';
import { InsumoModule } from './insumo/insumo.module';
import { ReporteModule } from './reporte/reporte.module';
import { VentaModule } from './venta/venta.module';
import { PlanManejoModule } from './plan_manejo/plan_manejo.module';
import { AccionCorrectivaModule } from './accion_correctiva/accion_correctiva.module';
import { AccionEjecutadaModule } from './accion_ejecutada/accion_ejecutada.module';
import { TratamientoModule } from './tratamiento/tratamiento.module';
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
      schema: 'public',
      synchronize: true
    }),

    UsuarioModule,
    IncidenciaModule,
    CosechaModule,
    CultivoBaseModule,
    EvidenciaModule,
    TipoIncidenciaModule,
    RolModule,
    CultivoRealModule,
    InsumoModule,
    ReporteModule,
    VentaModule,
    PlanManejoModule,
    AccionCorrectivaModule,
    AccionEjecutadaModule,
    TratamientoModule

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}