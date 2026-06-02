import { Module } from '@nestjs/common';
import { accion_correctivaService } from './accion_correctiva.service';
import { AccionCorrectivaController } from './accion_correctiva.controller';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AccionCorrectiva } from './entities/accion_correctiva.entity';

@Module({
  controllers: [AccionCorrectivaController],
  providers: [accion_correctivaService],

  imports: [
    TypeOrmModule.forFeature([AccionCorrectiva]),
  ]
})
export class AccionCorrectivaModule {}
