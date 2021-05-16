import { Controller, Get } from '@nestjs/common';
import { AccountAppService } from './account-app.service';

@Controller()
export class AccountAppController {
  constructor(private readonly accountAppService: AccountAppService) {}

  @Get()
  getHello(): string {
    return this.accountAppService.getHello();
  }
}
