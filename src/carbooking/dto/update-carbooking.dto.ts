import { PartialType } from '@nestjs/swagger';
import { CreateCarbookingDto } from './create-carbooking.dto';

export class UpdateCarbookingDto extends PartialType(CreateCarbookingDto) {}
