import { AuctionInMemoryDto } from './dto/auction-in-memory.dto';

type UpdateByBid = {
  id: string;
  userId: string;
};

type UpdateByCron = {
  id: string;
  isOver: boolean;
};

class AuctionMemoryHandler {
  private runningActions: AuctionInMemoryDto[];
  constructor() {
    this.runningActions = [];
  }

  public setAuctions(auctions: AuctionInMemoryDto[]) {
    this.runningActions = auctions;
  }

  public getAllAuctions() {
    return this.runningActions;
  }

  public getAuctionByID(id: string) {
    return this.runningActions.find((action) => action.id === id);
  }
  private getAuctionIndex(id: string) {
    const auctionIndex = this.runningActions.findIndex(
      (auction) => auction.id === id,
    );

    if (auctionIndex === -1) {
      throw new Error('There is no auction with the informed id');
    }
    return auctionIndex;
  }

  public updateByBid({ id, userId }: UpdateByBid) {
    const auctionIndex = this.getAuctionIndex(id);

    if (this.runningActions[auctionIndex].isOver) {
      throw new Error('This auction is already over');
    }

    const newTimer = new Date();
    newTimer.setSeconds(newTimer.getSeconds() + 15);

    const updatedAuctionItem: AuctionInMemoryDto = {
      ...this.runningActions[auctionIndex],
      userId,
      price: this.runningActions[auctionIndex].price + 0.01,
      time: newTimer,
    };

    console.log('updatedAuctionItem', updatedAuctionItem);

    this.runningActions.splice(auctionIndex, 1, updatedAuctionItem);
    console.log('updatedRunningActions', this.runningActions);
  }
  public updateByCron({ id, isOver }: UpdateByCron) {
    const auctionIndex = this.getAuctionIndex(id);
    const updatedAuctionItem: AuctionInMemoryDto = {
      ...this.runningActions[auctionIndex],
      isOver,
    };
    this.runningActions.splice(auctionIndex, 1, updatedAuctionItem);
  }
}

export default new AuctionMemoryHandler();
