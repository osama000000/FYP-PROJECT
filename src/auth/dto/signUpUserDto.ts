import { IsEmail, IsNotEmpty, MinLength } from "class-validator";



export class SignUpUserDto {
  
    @IsNotEmpty()
    username: string;
  
    @IsNotEmpty()
    @IsEmail()
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
 
}
