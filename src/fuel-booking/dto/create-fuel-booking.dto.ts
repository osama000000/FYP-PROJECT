import { Pump } from "src/nearest-pump/Schema/pump";

export class CreateFuelBookingDto {

    location: string;
   
    fueltype:string;
 
    litre: string;

    paymentMethod: string;
    
    pump:Pump;
}
