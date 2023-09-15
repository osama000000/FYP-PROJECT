import { IsEmpty } from "class-validator";
import { Car } from "../Schema/car";

export class CarbookingDto {

    name:string;

    carmodel:string;

    city: string;

    date:string;
    
    
     car:Car;

}
