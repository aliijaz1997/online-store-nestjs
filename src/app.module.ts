import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ItemModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
