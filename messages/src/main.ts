import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
