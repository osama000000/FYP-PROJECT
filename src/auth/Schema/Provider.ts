import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProviderDocument = Provider&Document;
@Schema({
    timestamps:true
})
export class Provider{
  

    @Prop()
    ProfileImage: string;
    @Prop()
    fullname: string;
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
    @Prop()
    services:string;
    // @Prop()
    // image:string;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);