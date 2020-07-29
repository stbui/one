import { Module } from '@nestjs/common';
import { LayoutService } from '../layout/layout.service';
import { MarketController } from './market.controller';
import { MarketService } from './market.service';

@Module({
  controllers: [MarketController],
  providers: [MarketService, LayoutService],
})
export class MarketModule {}
