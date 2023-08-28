import { PartialType } from '@nestjs/swagger';
import { CreateFuelAnalyticDto } from './create-fuel-analytic.dto';

export class UpdateFuelAnalyticDto extends PartialType(CreateFuelAnalyticDto) {}
