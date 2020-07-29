import {
    Controller,
    Get,
    Render,
    Param,
    ParseIntPipe,
    Post,
    Body,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { LayoutInterceptor } from '../layout/layout.interceptor';
import { CrudController } from '../common/crud/crud.controller';
import { CrawlerService } from './crawler.service';
import { CrawlerEntity } from './crawler.entity';

// @UseInterceptors(LayoutInterceptor)
@Controller('crawler')
export class CrawlerController extends CrudController<CrawlerEntity> {
    constructor(protected service: CrawlerService) {
        super();
    }

    @Get()
    // @Render('crawler/index.html')
    async root() {
        return this.service.execute();
    }

    @Get('login')
    @UseInterceptors(LayoutInterceptor)
    @Render('crawler/index.html')
    async login() {
        return { msg: '添加成功', code: 1, url: '/crawler' };
    }

    @Post('add')
    async save(@Body() body) {
        // 登陆
        const data = await this.service.login(body);

        // 记录token
        if (data) {
            this.service.create({ mobile: body.account, token: '2' });

            return { msg: '添加成功', code: 1, url: '/crawler', data };
        }

        return { msg: '很抱歉，当前为演示站，不允许任何操作', code: 1 };
    }
}
