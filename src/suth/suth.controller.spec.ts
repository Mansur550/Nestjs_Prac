import { Test, TestingModule } from '@nestjs/testing';
import { SuthController } from './suth.controller';

describe('SuthController', () => {
  let controller: SuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuthController],
    }).compile();

    controller = module.get<SuthController>(SuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
