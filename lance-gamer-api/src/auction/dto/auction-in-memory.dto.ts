export class AuctionInMemoryDto {
  price: number;
  time: Date;
  startTime: Date;
  id: string;
  userId: string;
  isOver: boolean;
  constructor(
    price: number,
    time: Date,
    startTime: Date,
    id: string,
    userId: string,
    isOver: boolean,
  ) {
    this.price = price;
    this.time = time;
    this.startTime = startTime;
    this.id = id;
    this.userId = userId;
    this.isOver = isOver;
  }
}
