import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanManejoDto } from './create-plan_manejo.dto';

export class UpdatePlanManejoDto extends PartialType(CreatePlanManejoDto) {}
