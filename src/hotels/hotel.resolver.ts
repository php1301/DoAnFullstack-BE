import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HotelType } from './hotel.type';
import { HotelsService } from './hotels.service';

@Resolver(of => HotelType)
export class HotelResolver {
  constructor(private hotelsService: HotelsService) {}
  @Query(returns => HotelType)
  hotel() {
    return {
      id: '12234',
      hotelName: 'test Hotel',
      pricePerNight: 123,
    };
  }
  @Mutation(returns => HotelType)
  createHotel(
    @Args('hotelName') hotelName: string,
    @Args('pricePerNight') pricePerNight: number,
    @Args('hotelDetails') hotelDetails: string,
  ) {
    return this.hotelsService.createHotel(
      hotelName,
      pricePerNight,
      hotelDetails,
    );
  }
}
