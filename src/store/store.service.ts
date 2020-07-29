import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CrudService } from '../common/crud/crud.service';
import { StoreEntity } from './store.entity';
import { STORE_TOKEN } from './store.constants';

@Injectable()
export class StoreService extends CrudService<StoreEntity> {
    constructor(
        @Inject(STORE_TOKEN)
        protected readonly repository: Repository<StoreEntity>,
    ) {
        super();
    }

    // find() {
    //     return [
    //         {
    //             goods_id: '1',
    //             goods_name: '2',
    //             sales_actual: '2',
    //             goods_sort: '2',
    //             create_time: '2',
    //             category: { name: '1' },
    //             goods_status: { text: '1' },
    //         },
    //     ];
    // }

    /**
     * 更新商品库存销量
     * @param goodsList
     */
    updateStockSales(goodsList) {
        // 整理批量更新商品销量
    }

    /**
     * 修改商品状态
     * @param state
     */
    setStatus(state) {}
}
