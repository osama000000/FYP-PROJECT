import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User&Document;
@Schema()
export class User{
    @Prop()
    username: string;
    @Prop()
    email:string;
    @Prop()
    phone:string;
    @Prop()
    address:string;
    @Prop()
    cnic:string;
    @Prop()
    password:string;
    @Prop()
    services:string;
}

export const UserSchema = SchemaFactory.createForClass(User);