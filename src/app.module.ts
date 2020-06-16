import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hotel } from './hotels/hotel.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost:27017/hotel',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Hotel],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    HotelsModule,
  ],
  providers: [],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
