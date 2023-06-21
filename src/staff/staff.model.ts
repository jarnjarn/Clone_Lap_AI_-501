import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";

import { Document } from "mongoose";

export type StaffDocument = Staff & Document
@Schema()
export class Staff{
    @Prop()
    staffname: string ;
    @Prop()
    avatar: string;
    @Prop()
    position: string;
    @Prop()
    phone: number;
    @Prop()
    email: string;
    @Prop({default:Date.now})
    createAt: Date;
    @Prop({default:Date.now})
    updateAt: Date;

}

export const StaffSchema = SchemaFactory.createForClass(Staff)