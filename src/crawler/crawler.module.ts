import {
    Module,
    HttpModule,
    RequestMethod,
    MiddlewareConsumer,
} from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';

import { LayoutService } from '../layout/layout.service';
import { CrawlerController } from './crawler.controller';
import { CrawlerService } from './crawler.service';
import { CrawlerProviders } from './crawler.providers';
import { CrawlerProxyMiddleware } from './crawler.middleware';
import { TasksService } from './tasks.service';

@Module({
    imports: [HttpModule, DatabaseModule],
    controllers: [CrawlerController],
    providers: [
        LayoutService,
        CrawlerService,
        ...CrawlerProviders,
        TasksService,
    ],
    exports: [CrawlerService],
})
export class CrawlerModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(CrawlerProxyMiddleware)
            .forRoutes({ path: 'api/zfl/', method: RequestMethod.ALL });
    }
}
