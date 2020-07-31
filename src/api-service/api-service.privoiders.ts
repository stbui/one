import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { apiServiceEntity } from './api-service.entity';
import { apiServiceRepositoryToken } from './api-service.constants';

export const apiServieProviders = [
    {
        provide: apiServiceRepositoryToken,
        useFactory: (connection: Connection) =>
            connection.getRepository(apiServiceEntity),
        inject: [DB_CON_TOKEN],
    },
];
