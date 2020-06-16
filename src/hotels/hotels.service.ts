import { Injectable } from '@nestjs/common';
import { Hotel } from './hotel.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
@Injectable()
export class HotelsService {
  // nếu ko có private thì các class khác xài chung service có thể mutate hotels - gây kết quả không mong muốn
  constructor(
    @InjectRepository(Hotel) private hotelRepository: Repository<Hotel>,
  ) {}

  async createHotel(hotelName, pricePerNight, hotelDetails): Promise<Hotel> {
    const hotel = await this.hotelRepository.create({
      id: uuid(),
      hotelName,
      pricePerNight,
      hotelDetails,
    });
    return this.hotelRepository.save(hotel);
  }
}
