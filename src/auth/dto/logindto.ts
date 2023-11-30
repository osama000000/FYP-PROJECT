import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";



export class Login {
  
 
    
    @IsEmail()
    email:string;

    @MinLength(6)
    password:string;
    
   @IsNotEmpty()
  @IsString({ each: true }) // Validate each element in the array
  providerType: string; // Update to an array of strings
}
 

