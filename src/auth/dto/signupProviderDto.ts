import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";



export class SignUpProviderDto {
    @IsString()
    ProfileImage: string;
    @IsNotEmpty()
    @IsString()
    fullname: string;
    @IsNotEmpty()
    @IsString()
    @IsEmail({},{message: 'please enter correct email'})
    email:string;
    @IsNotEmpty()
    @IsString()
    date:string;
    @IsNotEmpty()
    @IsString()
    cnic:string;
    @IsNotEmpty()
    @IsString()
    phoneNumber:string;
    @IsNotEmpty()
    @IsString()
    address:string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password:string;

    @IsString()
    @IsNotEmpty()
    services:string;
}
