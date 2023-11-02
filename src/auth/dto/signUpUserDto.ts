import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class SignUpUserDto {
    
   @Prop({required:false})
   @IsOptional()
    profileImage: string;

    @IsNotEmpty()
    fullName: string;
  
    @IsNotEmpty()
    @IsEmail({},{message: 'please enter correct email'})
    email:string;

    @IsNotEmpty()

    date:string;
    @IsNotEmpty()
    cnic:string;


    @IsNotEmpty()

    phoneNumber:string;

    @IsNotEmpty()
    address:string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    // @Matches(/((?=.*\d) | (?=.*\W+))(?![.\n])(?=.*[A-Z]) (?=.*[a-z]).*$/,
    //  {message:'password too weak'},)
    password:string;
 
}
