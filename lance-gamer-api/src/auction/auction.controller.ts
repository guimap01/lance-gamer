import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import auctionMemoryHandler from './auction-memory-handler';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post()
  create(@Body() createAuctionDto: CreateAuctionDto) {
    return this.auctionService.create(createAuctionDto);
  }

  @Get()
  findAll() {
    return auctionMemoryHandler.getAllAuctions();
  }

  @Put(':id')
  auctionBid(@Param('id') id: string, @Body() user: { userId: string }) {
    return auctionMemoryHandler.updateByBid({ id, userId: user.userId });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return auctionMemoryHandler.getAuctionByID(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuctionDto: UpdateAuctionDto) {
    return this.auctionService.update(id, updateAuctionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auctionService.remove(id);
  }
}
