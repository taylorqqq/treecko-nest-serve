import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // 创建 Nest 应用实例
  await app.listen(3000); // 监听端口
}
bootstrap();
