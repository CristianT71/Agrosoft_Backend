import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTratamientoDto } from './dto/create-tratamiento.dto';
import { UpdateTratamientoDto } from './dto/update-tratamiento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tratamiento } from './entities/tratamiento.entity';
import { PlanManejo } from '../plan_manejo/entities/plan_manejo.entity';
import { Insumo } from '../insumo/entities/insumo.entity';


@Injectable()
export class TratamientoService {

  constructor(
    @InjectRepository(Tratamiento)
    private readonly tratamientoRepository: Repository<Tratamiento>,

    @InjectRepository(PlanManejo)
    private readonly planManejoRepository: Repository<PlanManejo>,

    @InjectRepository(Insumo)
    private readonly insumoRepository: Repository<Insumo>
  ){}

  async create(createTratamientoDto: CreateTratamientoDto) {
    const { planManejoId, insumoId, ...datosTratamiento } = createTratamientoDto; //Extraer id de plan manejo

    const planManejo = await this.planManejoRepository.findOneBy({ id: planManejoId }); // Validar que planManejo exista
    if (!planManejo) {
      throw new NotFoundException(`PlanManejo con id ${planManejoId} no existe`)
    }

    const insumo = await this.insumoRepository.findOneBy({ id: insumoId });
    if (!insumo) {
      throw new NotFoundException(`Insumo con id ${insumoId} no existe`)
    }
    try{
      const tratamiento = this.tratamientoRepository.create({
        ...datosTratamiento,
        planManejo,
        insumo,
      });
      return await this.tratamientoRepository.save(tratamiento);
    }catch (error){
      console.log(error);
      throw new InternalServerErrorException('error al registrar una tratamiento');
    }

  }

  async findAll() {
    return await this.tratamientoRepository.find();
  }

  async findOne(id: string) {
  const tratamiento = await this.tratamientoRepository.findOneBy({ id});
  if (!tratamiento){
    throw new NotFoundException(`tratamiento con id ${id} no existe`)
  }
  return tratamiento;
  }

  async update(id: string, updateTratamientoDto: UpdateTratamientoDto) {
    const tratamiento = await this.tratamientoRepository.preload({
      id,
      ...updateTratamientoDto,
    });
    if (!tratamiento){
      throw new NotFoundException(`Tratamiento con id ${id} no existe`)
    }
    try{
      await this.tratamientoRepository.save(tratamiento);
      return tratamiento; 
    } catch (error){
      throw new InternalServerErrorException('No se puede actualizar el tratamiento')
    }

  }

  async remove(id: string) {
    const Tratamiento = await this.findOne(id);
    await this.tratamientoRepository.remove(Tratamiento);
    return 'Tratamiento eliminado correctamente';
  }
}