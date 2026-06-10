import { Module } from '@nestjs/common';
import { AccionEjecutadaService } from './accion_ejecutada.service';
import { AccionEjecutadaController } from './accion_ejecutada.controller';
import { AccionEjecutada } from './entities/accion_ejecutada.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { CultivoRealModule } from '../cultivo_real/cultivo_real.module';

@Module({
  controllers: [AccionEjecutadaController],
  providers: [AccionEjecutadaService],
  exports: [AccionEjecutadaService],

imports:[
  TypeOrmModule.forFeature([AccionEjecutada]),
  UsuarioModule,
  CultivoRealModule,
]
})
export class AccionEjecutadaModule {}
