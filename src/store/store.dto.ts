import { ApiModelProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsNotEmpty } from 'class-validator';

export class CreateStoreDto {
  @ApiModelProperty({ description: '商品id' })
  @IsEmail()
  @IsNotEmpty()
  readonly goods_id: number;

  @ApiModelProperty({ description: '商品名称' })
  @IsString()
  @IsNotEmpty()
  readonly goods_name: string;
}

export class StoreDto {
  @ApiModelProperty({ description: '商品id' })
  readonly goods_id: number;

  @ApiModelProperty({ description: '商品名称' })
  readonly goods_name: string;
  @ApiModelProperty({ description: '初始销量' })
  sales_initial: number;
  @ApiModelProperty({ description: '商品分类id' })
  category_id: number;
  @ApiModelProperty()
  click: number;
  @ApiModelProperty()
  brand_id: number;
  @ApiModelProperty()
  store_count: number;
  @ApiModelProperty()
  comment_count: number;
  @ApiModelProperty()
  weight: number;
  @ApiModelProperty()
  goods_remark: number;
  @ApiModelProperty()
  goods_content: number;
  @ApiModelProperty()
  is_real: number;
  @ApiModelProperty()
  is_on_sale: number;
  @ApiModelProperty()
  is_free_shipping: number;
  @ApiModelProperty()
  sort: number;
  @ApiModelProperty()
  is_recommend: number;
  @ApiModelProperty()
  is_new: number;
  @ApiModelProperty()
  is_hot: number;
  @ApiModelProperty()
  coupon: number;
  @ApiModelProperty()
  vip: number;
  @ApiModelProperty()
  goods_type: number;
  @ApiModelProperty()
  spec_type: number;
  @ApiModelProperty()
  give_integral: number;
  @ApiModelProperty()
  exchange_integral: number;
  @ApiModelProperty()
  sales_sum: number;
  @ApiModelProperty()
  prom_type: number;
  @ApiModelProperty()
  prom_id: number;
  @ApiModelProperty()
  delivery_id: number;
  @ApiModelProperty()
  discount: number;
  @ApiModelProperty()
  agent_type: number;
  @ApiModelProperty()
  agent_price: number;

  @ApiModelProperty()
  create_time: Date;
  @ApiModelProperty()
  update_time: Date = new Date();

  @ApiModelProperty() app_id: number;
}
