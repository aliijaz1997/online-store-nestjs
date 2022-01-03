import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
} from 'class-validator';
export class CreateItemDto {
    @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
   @IsNotEmpty()
  @IsString()
  price: string;
  @ApiProperty()
   @IsNotEmpty()
  @IsString()
  type: string;
}
