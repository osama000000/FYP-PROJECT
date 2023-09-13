import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";



export class SignUpProviderDto {
    
    @IsNotEmpty()
    @IsString()
    username: string;

    
    @IsNotEmpty()
    @IsString()
    @IsEmail({},{message: 'please enter correct email'})
    email:string;

    @IsNotEmpty()
    @IsString()
    phone:string;

    @IsNotEmpty()
    @IsString()
    address:string;

    @IsNotEmpty()
    @IsString()
    cnic:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password:string;

    @IsString()
    @IsNotEmpty()
    services:string;
}
