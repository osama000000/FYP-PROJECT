import { Prop } from "@nestjs/mongoose";

export class CreateCarDto {

    @Prop()
    carImage: string;

    @Prop()
    name: string;

    @Prop()
    model: string;

    @Prop()
    condition:string;

    @Prop()
    price:string;

    @Prop()
    description:string;
}
