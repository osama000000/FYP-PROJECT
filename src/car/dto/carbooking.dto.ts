import { IsEmpty } from "class-validator";
import { Car } from "../Schema/car";
import { User } from "src/auth/Schema/user";

export class CarbookingDto {

    name:string;

    carmodel:string;

    city: string;

    date:string;

    car:Car;

    user:User;

}
