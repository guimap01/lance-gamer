import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import auctionMemoryHandler from './auction/auction-memory-handler';
import { AuctionInMemoryDto } from './auction/dto/auction-in-memory.dto';

async function bootstrap() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 15);
  const auctionItem = new AuctionInMemoryDto(10.11, time, '123', '1234', false);
  auctionMemoryHandler.setAuctions([auctionItem]);

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
