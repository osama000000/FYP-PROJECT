import { PartialType } from '@nestjs/swagger';
import { CreateCarwashDto } from './create-carwash.dto';

export class UpdateCarwashDto extends PartialType(CreateCarwashDto) {}
