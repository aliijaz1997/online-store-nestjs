import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { PrismaService } from 'src/common/prisma.service';

@Module({
  controllers: [ItemController],
  providers: [ItemService, PrismaService],
})
export class ItemModule {}
