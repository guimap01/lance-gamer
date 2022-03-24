export class AuctionInMemoryDto {
  price: number;
  time: Date;
  id: string;
  userId: string;
  isOver: boolean;
  constructor(
    price: number,
    time: Date,
    id: string,
    userId: string,
    isOver: boolean,
  ) {
    this.price = price;
    this.time = time;
    this.id = id;
    this.userId = userId;
    this.isOver = isOver;
  }
}
