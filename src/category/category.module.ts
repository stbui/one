import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';

import { LayoutService } from '../layout/layout.service';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryProviders } from './category.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [LayoutService, CategoryService, ...CategoryProviders],
  exports: [CategoryService],
})
export class CategoryModule {}
