import { PartialType } from '@nestjs/swagger';

import { CarbookingDto } from './carbooking.dto';

export class UpdatebookingDto extends PartialType(CarbookingDto) {}
