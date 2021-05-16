import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountAppService {
  getHello(): string {
    return 'Hello World!';
  }
}
