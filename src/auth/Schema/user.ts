import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User&Document;
@Schema({
    timestamps:true
})
export class User{

    @Prop()
    image: string;
    @Prop()
    fullname: string;
    @Prop({ unique:[true, 'Duplicate email entered']})
    email:string;
    @Prop()
    dob:string;
    @Prop()
    cnic:string;
    @Prop()
    phone:string;
    @Prop()
    address:string;
    @Prop()
    password:string;
    @Prop()
    services:string;
    // @Prop()
    // image:string;
}

export const UserSchema = SchemaFactory.createForClass(User);