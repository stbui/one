import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { LayoutService } from '../layout/layout.service';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';
import { SettingProviders } from './setting.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [SettingController],
  providers: [LayoutService, SettingService, ...SettingProviders],
})
export class SettingModule {}
