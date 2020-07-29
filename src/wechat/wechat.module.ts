import { Module, HttpModule } from '@nestjs/common';
import { ServiceModule } from '../common/services';
import { WechatController } from './wechat.controller';
import { WechatService } from './wechat.service';
import { WechatConfig } from './wechat.interface';
import { WeChatConfigProvider } from './wechat.constants';

@Module({
  imports: [HttpModule, ServiceModule],
  controllers: [WechatController],
})
export class WechatModule {
  static forRoot(config: WechatConfig) {
    return {
      module: WechatModule,
      providers: [
        WechatService,
        { provide: WeChatConfigProvider, useValue: config },
      ],
      exports: [WechatService],
    };
  }
}
