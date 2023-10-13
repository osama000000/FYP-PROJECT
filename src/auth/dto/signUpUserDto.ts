import { Prop } from "@nestjs/mongoose";
import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class SignUpUserDto {

    @IsString()
    image: string;

    @IsNotEmpty()
    fullname: string;
  
    @IsNotEmpty()
    @IsEmail({},{message: 'please enter correct email'})
    email:string;

    @IsNotEmpty()

    dob:string;
    @IsNotEmpty()
    cnic:string;


    @IsNotEmpty()

    phone:string;

    @IsNotEmpty()
    address:string;


    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    // @Matches(/((?=.*\d) | (?=.*\W+))(?![.\n])(?=.*[A-Z]) (?=.*[a-z]).*$/,
    //  {message:'password too weak'},)
    password:string;
 
}
