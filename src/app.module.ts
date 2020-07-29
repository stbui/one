import { Module } from '@nestjs/common';
import { DatabaseModule } from './common/database/database.module';
import { LayoutService } from './layout/layout.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './store/store.module';
import { CategoryModule } from './category/category.module';
import { DeliveryModule } from './delivery/delivery.module';
import { OrderModule } from './order/order.module';
import { UserModule } from './user/user.module';
import { WxappModule } from './wxapp/wxapp.module';
import { SettingModule } from './setting/setting.module';
import { WechatModule } from './wechat/wechat.module';
import { WebUserModule } from './web-user/web-user.module';
import { LoginModule } from './login/login.module';
import { MarketModule } from './market/market.module';
import { CrawlerModule } from './crawler/crawler.module';

@Module({
    imports: [
        DatabaseModule,
        StoreModule,
        CategoryModule,
        DeliveryModule,
        OrderModule,
        UserModule,
        WxappModule,
        SettingModule,
        WechatModule,
        WebUserModule,
        LoginModule,
        MarketModule,
        CrawlerModule,
    ],
    controllers: [AppController],
    providers: [AppService, LayoutService],
})
export class AppModule {}
