import { Connection } from 'typeorm';
import { DB_CON_TOKEN } from '../common/database/database.constants';
import { CategoryEntity } from './category.entity';
import { CATEGORY_TOKEN } from './category.constants';

export const CategoryProviders = [
  {
    provide: CATEGORY_TOKEN,
    useFactory: (connection: Connection) =>
      connection.getRepository(CategoryEntity),
    inject: [DB_CON_TOKEN],
  },
];
