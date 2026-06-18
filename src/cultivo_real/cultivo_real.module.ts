import { Module } from '@nestjs/common';
import { CultivoRealService } from './cultivo_real.service';
import { CultivoRealController } from './cultivo_real.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CultivoReal } from './entities/cultivo_real.entity';
import { CultivoBaseModule } from '../cultivo_base/cultivo_base.module';

@Module({
  controllers: [CultivoRealController],
  providers: [CultivoRealService],
  imports:[
    TypeOrmModule.forFeature([CultivoReal]),
    CultivoBaseModule,
  ],
  exports: [TypeOrmModule]
})
export class CultivoRealModule {}
