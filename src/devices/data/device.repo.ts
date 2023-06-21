import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Device } from './device.model';

@Injectable()
export class DeviceRepository {
  constructor(
    @InjectModel(Device.name) private readonly deviceModel: Model<Device>,
  ) {}

  async create(deviceData: Partial<Device>): Promise<Device> {
    const device = new this.deviceModel(deviceData);
    return device.save();
  }

  async findAll(): Promise<Device[]> {
    return this.deviceModel.find().exec();
  }

  async findById(id: string): Promise<Device> {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, deviceData: Partial<Device>): Promise<Device> {
    return this.deviceModel.findByIdAndUpdate(id, deviceData, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.deviceModel.findByIdAndDelete(id).exec();
  }

  //  
  
}
