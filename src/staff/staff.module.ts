import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StaffSchema } from './staff.model';

@Module({
  imports: [
    MongooseModule.forFeature([{name:'staff',schema:StaffSchema}]),
  ],
  controllers: [StaffController],
  providers: [StaffService]
})
export class StaffModule {}
