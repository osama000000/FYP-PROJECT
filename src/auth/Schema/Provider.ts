import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";

export type ProviderDocument = Provider&Document;
@Schema({
    timestamps:true
})
export class Provider{
  

    @Prop()
    profileImage: string;
    @Prop()
    fullName: string;
    @Prop({ unique:[true, 'Duplicate email entered']})
    email:string;
    @Prop()
    date:string;
    @Prop()
    cnic:string;
    @Prop()
    phoneNumber:string;
    @Prop()
    address:string;
    @Prop()
    password:string;
    @IsString({each:true})
    @Prop()
    services:string[];
    // @Prop()
    // image:string;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);