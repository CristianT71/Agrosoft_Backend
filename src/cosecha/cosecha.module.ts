import { Module } from '@nestjs/common';
import { CosechaService } from './cosecha.service';
import { CosechaController } from './cosecha.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cosecha } from './entities/cosecha.entity';
import { UsuarioModule } from '../usuario/usuario.module';
import { CultivoRealModule } from '../cultivo_real/cultivo_real.module';

@Module({
  controllers: [CosechaController],
  providers: [CosechaService],
  imports: [
    TypeOrmModule.forFeature([ Cosecha ]),
    UsuarioModule,
    CultivoRealModule,
  ],
  exports: [TypeOrmModule]
})
export class CosechaModule {}
