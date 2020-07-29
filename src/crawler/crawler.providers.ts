import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { CrawlerEntity } from './crawler.entity';
import { Crawler_TOKEN } from './crawler.constants';

export const CrawlerProviders = [
    {
        provide: Crawler_TOKEN,
        useFactory: (connection: Connection) =>
            connection.getRepository(CrawlerEntity),
        inject: [DB_CON_TOKEN],
    },
];
