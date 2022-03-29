import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import auctionMemoryHandler from './auction/auction-memory-handler';
import { AuctionInMemoryDto } from './auction/dto/auction-in-memory.dto';

async function bootstrap() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 45);
  const auctionItem = new AuctionInMemoryDto(10.11, time, '123', '1234', false);
  const auctionItem2 = new AuctionInMemoryDto(
    10.11,
    time,
    '124',
    '1234',
    false,
  );
  const auctionItem3 = new AuctionInMemoryDto(
    10.11,
    time,
    '125',
    '1234',
    false,
  );
  const auctionItem4 = new AuctionInMemoryDto(
    10.11,
    time,
    '126',
    '1234',
    false,
  );
  auctionMemoryHandler.setAuctions([
    auctionItem,
    auctionItem2,
    auctionItem3,
    auctionItem4,
  ]);

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  app.enableCors({
    origin: '*',
  });
  await app.listen(3000);
}
bootstrap();
