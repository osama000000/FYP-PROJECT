import { IsEmail, IsNotEmpty, MinLength } from "class-validator";



export class SignUpProviderDto {
    
    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    @IsEmail({},{message: 'please enter correct email'})
    email:string;

    @IsNotEmpty()
    phone:string;
    @IsNotEmpty()
    address:string;
    @IsNotEmpty()
    cnic:string;
    @IsNotEmpty()
    @MinLength(6)
    password:string;
    @IsNotEmpty()
    services:string;
}
