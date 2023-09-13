import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";



export class SignUpUserDto {
  
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
    @MinLength(8)
    @MaxLength(20)
    // @Matches(/((?=.*\d) | (?=.*\W+))(?![.\n])(?=.*[A-Z]) (?=.*[a-z]).*$/,
    //  {message:'password too weak'},)
    password:string;
 
}
