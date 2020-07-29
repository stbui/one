import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';

import { LayoutService } from '../layout/layout.service';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';
import { CrawlerProviders } from './crawler.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [CrawlerController],
    providers: [LayoutService, CrawlerService, ...CrawlerProviders],
    exports: [CrawlerService],
})
export class CrawlerModule {}
