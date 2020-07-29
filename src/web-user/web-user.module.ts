import { Module } from '@nestjs/common';
import { WebUserController } from './web-user.controller';
import { WebUserService } from './web-user.service';

@Module({
  controllers: [WebUserController],
  providers: [WebUserService]
})
export class WebUserModule {}
