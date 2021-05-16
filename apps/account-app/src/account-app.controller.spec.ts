import { Test, TestingModule } from '@nestjs/testing';
import { AccountAppController } from './account-app.controller';
import { AccountAppService } from './account-app.service';

describe('AccountAppController', () => {
  let accountAppController: AccountAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AccountAppController],
      providers: [AccountAppService],
    }).compile();

    accountAppController = app.get<AccountAppController>(AccountAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(accountAppController.getHello()).toBe('Hello World!');
    });
  });
});
