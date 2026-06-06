import { Module } from '@nestjs/common';
import { TratamientoService } from './tratamiento.service';
import { TratamientoController } from './tratamiento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tratamiento } from './entities/tratamiento.entity';

@Module({
  controllers: [TratamientoController],
  providers: [TratamientoService],

imports: [
    TypeOrmModule.forFeature([Tratamiento]),
  ]
})
export class TratamientoModule {}
