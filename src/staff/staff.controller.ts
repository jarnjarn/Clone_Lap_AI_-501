import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StaffService } from './staff.service';
import { CreateStaffDto } from './dto/create-staff.dto';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { Staff } from './staff.model';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post()
  async createStaff(@Body() createStaffDto: CreateStaffDto) {
    return this.staffService.createStaff(createStaffDto);
  }

  @Get()
  readStaff() {
    return this.staffService.readUser();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staffService.readUserbyId(id);
  }

  @Put(':id')
  async updateStaff(@Param('id') id: string, @Body() updateData: UpdateStaffDto) : Promise<Staff>
  {
    return this.staffService.updateStaff(id, updateData);
  } 

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staffService.deleteStaff(id);
  }
}
