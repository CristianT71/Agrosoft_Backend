import { Module } from '@nestjs/common';
import { CultivoBaseService } from './cultivo_base.service';
import { CultivoBaseController } from './cultivo_base.controller';

@Module({
  controllers: [CultivoBaseController],
  providers: [CultivoBaseService],
})
export class CultivoBaseModule {}
