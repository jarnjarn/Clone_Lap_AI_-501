import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
    @Prop({ required: true,unique: true, type: String })
    name: string;
    
}

export const DeviceSchema = SchemaFactory.createForClass(Device);