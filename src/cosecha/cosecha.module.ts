import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  controllers: [CosechaController],
  providers: [CosechaService],
  imports: [
    TypeOrmModule.forFeature([ Cosecha ]),
    UsuarioModule,
  ]
})
export class CosechaModule {}
