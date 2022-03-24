import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TasksService } from './tasks-service/tasks.service';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [ScheduleModule.forRoot(), AuctionModule],
  controllers: [AppController],
  providers: [AppService, TasksService],
})
export class AppModule {}
