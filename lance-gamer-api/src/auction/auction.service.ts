import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThan } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Auction } from './entities/auction.entity';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepository: Repository<Auction>,
  ) {}

  async create(createAuctionDto: CreateAuctionDto) {
    const auction = this.auctionRepository.create(createAuctionDto);
    return this.auctionRepository.save(auction);
  }

  async findAll() {
    const todayDate = new Date();
    return this.auctionRepository.find({
      where: {
        isOver: false,
        startTime: LessThan(todayDate),
      },
      take: 5,
    });
  }

  async findOne(id: string) {
    const auction = await this.auctionRepository.findOneBy({ id });
    if (!auction) {
      throw new NotFoundException('Auction not found');
    }
    return auction;
  }

  async update(id: string, updateAuctionDto: UpdateAuctionDto) {
    const auction = await this.auctionRepository.preload({
      id,
      ...updateAuctionDto,
    });
    if (!auction) {
      throw new NotFoundException('Auction not found');
    }
    return this.auctionRepository.save(auction);
  }

  async remove(id: string) {
    const auction = await this.findOne(id);
    return this.auctionRepository.remove(auction);
  }
}
