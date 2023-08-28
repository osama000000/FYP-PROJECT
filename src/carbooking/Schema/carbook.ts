import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Carbook{

@Prop()
startTime: Date;
@Prop()
endTime: Date;
@Prop()
status: String;

}

export const CarbookSchema = SchemaFactory.createForClass(Carbook)