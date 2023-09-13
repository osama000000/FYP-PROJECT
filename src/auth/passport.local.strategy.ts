import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { User } from "./Schema/user";

// @Injectable()
// // export class PassportLocalStrategy extends PassportStrategy(Strategy){


// //     constructor(private readonly authService :AuthService){
// //         super();
// //     }

// //     validate (username:string, password:string, ): User{
// //         const user=this.authService.getUserByUserName(username);
// //         if(user == undefined) throw new UnauthorizedException();

// //         if(user.password == password) return user;
// //     };

     
// }