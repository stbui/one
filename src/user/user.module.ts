import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { LayoutService } from '../layout/layout.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserProviders } from './user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [LayoutService, UserService, ...UserProviders],
})
export class UserModule {}
