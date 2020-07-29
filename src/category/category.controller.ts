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
import { CategoryService } from './category.service';
import { CategoryEntity } from './category.entity';

@UseInterceptors(LayoutInterceptor)
@Controller('category')
export class CategoryController extends CrudController<CategoryEntity> {
    constructor(protected service: CategoryService) {
        super();
    }

    @Get()
    @Render('goods/category/index.html')
    async root() {
        const data = await this.service.findAll();
        return { list: this.makeTree(data) };
    }

    @Get('add')
    @Render('goods/category/add.html')
    async add() {
        const data = await this.service.findAll();
        return { list: data };
    }

    @Get('edit/:id')
    @Render('goods/category/edit.html')
    async edit(@Param('id', new ParseIntPipe()) id: number) {
        const data = await this.service.findOneById(id);
        const list = await this.service.find();

        return { model: data, list: list };
    }

    @Post('add')
    @UseInterceptors(FileInterceptor('file'))
    async save(@Body() body) {
        const data = await this.service.create(body.category);
        if (data) {
            return { msg: '添加成功', code: 1, url: '/category', data };
        }

        return { msg: '很抱歉，当前为演示站，不允许任何操作', code: 1 };
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

    makeTree(list: any[]): any[] {
        const map = {};
        const tree = [];

        list.forEach((node, i) => {
            map[node.category_id] = node;
            list[i].child = [];
        });

        list.forEach(node => {
            if (node.parent_id !== 0) {
                map[node.parent_id].child.push(node);
            } else {
                tree.push(node);
            }
        });

        return tree;
    }
}
