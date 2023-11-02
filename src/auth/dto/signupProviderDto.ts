import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";



export class SignUpProviderDto {
    @Prop({required:false})
    @IsOptional()
    profileImage: string;
    @IsNotEmpty()
    @IsString()
    fullName: string;
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

    @IsString({each:true})
    @IsNotEmpty()
    services:string[];
}
