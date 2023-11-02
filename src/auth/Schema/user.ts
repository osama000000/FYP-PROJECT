import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User&Document;
@Schema({
    timestamps:true
})
export class User{
  

    @Prop({ required: false }) // Make profileImage optional
    profileImage?: string;

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
   
    // @Prop()
    // image:string;
}

export const UserSchema = SchemaFactory.createForClass(User);