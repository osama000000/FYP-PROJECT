import { PartialType } from '@nestjs/swagger';
import { SignUpProviderDto } from './signupProviderDto';


export class UpdateSignUpProviderDto extends PartialType(SignUpProviderDto) {}
