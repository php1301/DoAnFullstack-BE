import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.controller';
import { HotelsService } from './hotels.service';
import { HotelResolver } from './hotel.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotel.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Hotel])],
  controllers: [],
  providers: [HotelResolver, HotelsService],
})
export class HotelsModule {}
