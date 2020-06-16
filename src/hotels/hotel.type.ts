import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType('Hotel')
export class HotelType {
  @Field(type => ID)
  id: string;
  @Field()
  hotelName: string;
  @Field()
  pricePerNight: number;
  @Field()
  hotelDetails: string;
  @Field()
  guest: number;
  @Field()
  beds: number;
  @Field()
  price: number;
  // @Field()
  // hotelPhotos: [HotelPhotos];
//   @Field()
//   location: Array<string>;
  // @Field()
  // locationDescription: string;
  // @Field()
  // contactNumber: number;
  // @Field()
  // wifiAvailability: boolean;
  //   @Field()
  //   airCondition = false;
  //   @Field()
  //   parking = false;
  //   @Field()
  //   poolAvailability = false;
  //   @Field()
  //   extraBed = false;
}
