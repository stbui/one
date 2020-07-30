import {
    Controller,
    Get,
    Render,
    Param,
    ParseIntPipe,
    Post,
    Body,
    UseInterceptors,
    Req,
    Query,
    All,
    Res,
} from '@nestjs/common';

import { LayoutInterceptor } from '../layout/layout.interceptor';
import { CrudController } from '../common/crud/crud.controller';
import { CrawlerService } from './crawler.service';
import { CrawlerEntity } from './crawler.entity';

@Controller('crawler')
export class CrawlerController extends CrudController<CrawlerEntity> {
    constructor(protected service: CrawlerService) {
        super();
    }

    @Get()
    @UseInterceptors(LayoutInterceptor)
    @Render('crawler/index.html')
    async root() {
        // return this.service.execute();
        return {};
    }

    @Get('login')
    @UseInterceptors(LayoutInterceptor)
    @Render('crawler/index.html')
    async login() {
        return { msg: '添加成功', code: 1, url: '/crawler' };
    }

    @Post()
    @UseInterceptors(LayoutInterceptor)
    @Render('crawler/index.html')
    async save(@Body() body) {
        // 登陆
        const data: any = await this.service.login(body);

        console.log(data);
        // 记录token
        if (data.errorcode === 0) {
            this.service.create({ mobile: body.account, token: '2' });

            return { msg: '添加成功', code: 1, url: '/crawler', data };
        }

        return data;
    }

    @Get('record')
    record() {
        return this.service.create({ mobile: 123, token: '2' });
    }
}
