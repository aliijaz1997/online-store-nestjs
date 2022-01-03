import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemService {
  constructor(private readonly prisma: PrismaService) {}
  create(createItemDto: CreateItemDto) {
    return this.prisma.item.create({
      data: { ...createItemDto, inCart: false },
    });
  }

  findAll() {
    return this.prisma.item.findMany();
  }

  findOne(id: number) {
    return this.prisma.item.findUnique({ where: { id } });
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return this.prisma.item.update({ where: { id }, data: updateItemDto });
  }

  remove(id: number) {
    return this.prisma.item.delete({ where: { id } });
  }
}
