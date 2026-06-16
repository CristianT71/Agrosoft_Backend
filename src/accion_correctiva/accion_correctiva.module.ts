import { Module } from '@nestjs/common';
import { accion_correctivaService } from './accion_correctiva.service';
import { AccionCorrectivaController } from './accion_correctiva.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccionCorrectiva } from './entities/accion_correctiva.entity';
import {InsumoModule} from '../insumo/insumo.module';
import { IncidenciaModule } from '../incidencia/incidencia.module'; 
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  controllers: [AccionCorrectivaController],
  providers: [accion_correctivaService],
  exports: [accion_correctivaService],

  imports: [
    TypeOrmModule.forFeature([AccionCorrectiva]),
    InsumoModule,
    IncidenciaModule,
    UsuarioModule,
  ]
})
export class AccionCorrectivaModule {}
