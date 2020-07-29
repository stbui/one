import { Module } from '@nestjs/common';
import { DatabaseModule } from '../common/database/database.module';
import { WechatModule } from '../wechat/wechat.module';
import { LayoutService } from '../layout/layout.service';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderProviders } from './order.providers';

import { StoreModule } from '../store/store.module'

@Module({
  imports: [
    DatabaseModule,
    WechatModule.forRoot({
      appid: 'appid', // 公众号appi/应用appid/小程序appid
      mch_id: 'mch_id', // 商户号
      secretKey: 'secretKey', // 商户交易秘钥
      sign_type: 'MD5', // 微信支付签名类型('MD5' | 'HMAC-SHA256')，默认MD5，配置后，所有接口参数均会使用这个签名类型
      // pfx: fs.readFileSync('path_to_p12_file'), // p12文件
      sandbox: true, // 是否启用沙箱环境，默认不启用，用于商户支付验收测试
    }),
    StoreModule
  ],
  controllers: [OrderController],
  providers: [LayoutService, OrderService, ...OrderProviders],
})
export class OrderModule { }
