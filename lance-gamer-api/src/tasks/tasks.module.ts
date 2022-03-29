import { Module } from '@nestjs/common';
import { AuctionModule } from 'src/auction/auction.module';
import { TasksService } from './tasks.service';

@Module({
  imports: [AuctionModule],
  providers: [TasksService],
  exports: [TasksService],
})
export class TasksModule {}
