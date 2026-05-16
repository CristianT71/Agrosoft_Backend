import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';

@Module({
  controllers: [CosechaController],
  providers: [CosechaService],
})
export class CosechaModule {}
