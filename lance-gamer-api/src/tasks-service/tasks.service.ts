import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { isAfter } from 'date-fns';
import auctionMemoryHandler from 'src/auction/auction-memory-handler';

@Injectable()
export class TasksService {
  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    const runningAuction = auctionMemoryHandler
      .getAllAuctions()
      .filter((auction) => !auction.isOver);

    runningAuction.forEach((auction) => {
      if (!isAfter(new Date(), auction.time)) {
        return;
      }
      auctionMemoryHandler.updateByCron({ id: auction.id, isOver: true });
    });
  }
}
