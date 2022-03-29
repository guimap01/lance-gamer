import {
  IsBoolean,
  IsDate,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateAuctionDto {
  @IsPositive()
  price: number;

  @IsOptional()
  @IsString()
  userId: string;

  @IsDate()
  startTime: Date;

  @IsBoolean()
  isOver: boolean;
}
