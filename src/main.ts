import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HdPipe } from './hd/hd.pipe'
import { ParseIntPipe, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule) // 创建 Nest 应用实例
  // app.useGlobalPipes(new HdPipe()) // 全局管道HdPipe 数据处理
  app.useGlobalPipes(new ValidationPipe()) // 全局管道ValidationPipe 校验
  await app.listen(3000) // 监听端口
}
bootstrap()
