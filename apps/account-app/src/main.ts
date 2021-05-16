import { NestFactory } from '@nestjs/core';
import { AccountAppModule } from './account-app.module';

async function bootstrap() {
  const app = await NestFactory.create(AccountAppModule);
  await app.listen(3000);
}
bootstrap();
