import { Test, TestingModule } from '@nestjs/testing';
import { WxappService } from './wxapp.service';

describe('WxappService', () => {
  let service: WxappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WxappService],
    }).compile();

    service = module.get<WxappService>(WxappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
