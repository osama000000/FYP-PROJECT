import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User& Document;
@Schema()
export class User{
    @Prop()
    username:string;
    @Prop()
    email:string;
    @Prop()
    address:string;
    @Prop()
    phnumber:string;
    @Prop()
    password: string;
    @Prop()
    role:string;

}

export const UserSchema = SchemaFactory.createForClass(User)