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
import { DeliveryService } from './delivery.service';
import { DeliverEntity } from './delivery.entity';

@UseInterceptors(LayoutInterceptor)
@Controller('delivery')
export class DeliveryController extends CrudController<DeliverEntity> {
    constructor(protected service: DeliveryService) {
        super();
    }

    @Get()
    @Render('setting/delivery/index.html')
    async root() {
        const data = await this.service.findAll();
        return { list: data };
    }

    @Get('add')
    @Render('setting/delivery/add.html')
    async add() {
        const data = await this.service.findAll();
        return { list: data };
    }

    @Get('edit/:id')
    @Render('setting/delivery/edit.html')
    async edit(@Param('id', new ParseIntPipe()) id: number) {
        const model = await this.service.findOneById(id);
        const rule = await this.service.findRule({
            delivery_id: model.delivery_id,
        });

        return { model, rule };
    }

    @Post('add')
    @UseInterceptors(FileInterceptor('file'))
    async save(@Body() body) {
        const delivery = await this.service.create(body.delivery);

        console.log(body.delivery.rule);
        const data = await this.service.createRule({
            delivery_id: delivery.delivery_id,
            ...body.delivery.rule,
        });

        if (data) {
            return { msg: '添加成功', code: 1, url: '/delivery', data };
        }

        return { msg: '很抱歉，当前为演示站，不允许任何操作', code: 0 };
    }

    @Post('edit/:id')
    @UseInterceptors(FileInterceptor('file'))
    async editor(@Body() body, @Param() p) {
        const data = await this.service.patch(p.id, body.category);

        if (data) {
            return { msg: '修改成功', code: 1, url: '/category', data };
        }

        return { msg: '很抱歉，当前为演示站，不允许任何操作', code: 1 };
    }
}
