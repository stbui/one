import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { LayoutService } from '../layout/layout.service';
import { WxappController } from './wxapp.controller';
import { WxappService } from './wxapp.service';
import { WxappProviders } from './wxapp.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [WxappController],
  providers: [LayoutService, WxappService, ...WxappProviders],
})
export class WxappModule {}
