import { PartialType } from '@nestjs/swagger';
import { CreateNearestPumpDto } from './create-nearest-pump.dto';

export class UpdateNearestPumpDto extends PartialType(CreateNearestPumpDto) {}
