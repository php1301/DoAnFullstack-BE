import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class Hotel {
  @ObjectIdColumn()
  _id: string;
  @PrimaryColumn()
  id: string;
  @Column()
  hotelName: string;
  @Column()
  pricePerNight: number;
  @Column()
  hotelDetails: string;
  @Column()
  guest: number;
  @Column()
  beds: number;
  @Column()
  price: number;
}
