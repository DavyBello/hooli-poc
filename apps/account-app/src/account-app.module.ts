import { Module } from '@nestjs/common';
import { AccountAppController } from './account-app.controller';
import { AccountAppService } from './account-app.service';

@Module({
  imports: [],
  controllers: [AccountAppController],
  providers: [AccountAppService],
})
export class AccountAppModule {}
