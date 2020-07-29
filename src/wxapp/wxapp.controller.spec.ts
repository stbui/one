import { Test, TestingModule } from '@nestjs/testing';
import { WxappController } from './wxapp.controller';

describe('Wxapp Controller', () => {
  let controller: WxappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WxappController],
    }).compile();

    controller = module.get<WxappController>(WxappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
