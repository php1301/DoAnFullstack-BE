import { Controller, Get } from '@nestjs/common';
import { HotelsService } from './hotels.service';
// import { Hotel } from './hotel.model';

// route /hotels
@Controller('hotels')
export class HotelsController {
  constructor(private hotelsService: HotelsService) {}
  //  Services. đến phương thức có trong services - chú ý access modifier
  // @Get()
  //   Return về array Hotel - define method type as Mảng Hotel
  // getAllHotels(): Hotel[] {
  //   return this.hotelsService.getAllHotels();
  // }
}
