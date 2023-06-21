import { Injectable } from '@nestjs/common';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staff, StaffDocument } from './staff.model';

@Injectable()
export class StaffService {
constructor(
  @InjectModel('staff')private readonly staffModel: Model<StaffDocument>
){}

  async createStaff(staff): Promise<Staff>{
    const newStaff = new this.staffModel(staff)
    return newStaff.save()
  }
  async readUser(){
    return this.staffModel.find({})
    .then((staff)=>{return staff})
    .catch((err)=>console.log(err))
    
  }
  async readUserbyId(id:string){
    return this.staffModel.findById(id);
    
  }
  findAll() {
    return `This action returns all staff`;
  }

  findOne(id: number) {
    return `This action returns a #${id} staff`;
  }

  async updateStaff(id,data):Promise<Staff> {
    return this.staffModel.findByIdAndUpdate(id,data,{new: true})
  }
  
  async deleteStaff(id: string) {
    return this.staffModel.findByIdAndDelete(id);
  }
}






