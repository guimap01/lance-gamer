import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import auctionMemoryHandler from 'src/auction/auction-memory-handler';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_SECOND)
  handleCron() {
    const runningAuction = auctionMemoryHandler
      .getAllAuctions()
      .filter((auction) => !auction.isOver);

    runningAuction.forEach((auction) => {
      const isOver = auction.time.getSeconds() <= new Date().getSeconds();
      if (!isOver || auction.isOver) {
        return;
      }
      auctionMemoryHandler.updateByCron({ id: auction.id, isOver });
      this.logger.debug('Updated');
    });
    this.logger.debug(auctionMemoryHandler.getAuctionByID('123'));
  }
}
