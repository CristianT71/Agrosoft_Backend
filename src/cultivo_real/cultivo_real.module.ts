import { Module } from '@nestjs/common';
import { CultivoRealService } from './cultivo_real.service';
import { CultivoRealController } from './cultivo_real.controller';

@Module({
  controllers: [CultivoRealController],
  providers: [CultivoRealService],
})
export class CultivoRealModule {}
