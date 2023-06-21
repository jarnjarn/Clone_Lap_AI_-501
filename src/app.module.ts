import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DevicesModule } from './devices/devices.module';
import { CategoriesModule } from './categories/categories.module';
import { StaffModule } from './staff/staff.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.MONGO_URL,
      {
        connectionFactory: (connection) => {
          connection.plugin(require('mongoose-autopopulate'));
          return connection;
        },
      }
    ),
    DevicesModule,
    CategoriesModule,
    StaffModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
