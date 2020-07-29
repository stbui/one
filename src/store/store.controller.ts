import {
    Controller,
    Get,
    Render,
    Param,
    Post,
    Body,
    ParseIntPipe,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiUseTags, ApiOperation } from '@nestjs/swagger';
import { LayoutInterceptor } from '../layout/layout.interceptor';
import { CrudController } from '../common/crud/crud.controller';
import { CategoryService } from '../category/category.service';
import { DeliveryService } from '../delivery/delivery.service';
import { StoreService } from './store.service';
import { StoreDto, CreateStoreDto } from './store.dto';
import { StoreEntity } from './store.entity';

@ApiUseTags('store')
@Controller('store')
export class StoreController extends CrudController<StoreEntity> {
    constructor(
        protected service: StoreService,
        private categoryService: CategoryService,
        private deliveryService: DeliveryService,
    ) {
        super();
    }

    @Get('index')
    @ApiOperation({ title: '前端页面 - 首页' })
    @UseInterceptors(LayoutInterceptor)
    @Render('goods/index.html')
    async root() {
        const list = await this.service.findAll();

        return { list };
    }

    @Get('add')
    @ApiOperation({ title: '前端页面 - 添加' })
    @UseInterceptors(LayoutInterceptor)
    @Render('goods/add.html')
    async add() {
        const data = await this.service.find();
        const category = await this.categoryService.findAll();
        const delivery = await this.deliveryService.findAll();
        return { list: data, catgory: category, delivery };
    }

    @Get('edit/:id')
    @ApiOperation({ title: '前端页面 - 编辑' })
    @UseInterceptors(LayoutInterceptor)
    @Render('goods/edit.html')
    async edit(@Param('id', new ParseIntPipe()) id: number) {
        const data = await this.service.findOneById(id);

        return { model: data };
    }

    @Post('add')
    @ApiOperation({ title: '商品添加' })
    @UseInterceptors(LayoutInterceptor)
    @UseInterceptors(FileInterceptor('file'))
    async save(@Body() body) {
        const data = await this.service.create(body.goods);

        if (data) {
            return { msg: '添加成功', code: 1, url: '/store', data };
        }

        return { msg: '很抱歉，当前为演示站，不允许任何操作', code: 0 };
    }
}
