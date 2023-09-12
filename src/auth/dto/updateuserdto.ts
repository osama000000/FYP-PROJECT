import { PartialType } from '@nestjs/swagger';

import { SignUpUserDto } from './signUpUserDto';


export class UpdateSignUpUserDto extends PartialType(SignUpUserDto) {}
