import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { HdPipe } from './hd/hd.pipe'
import { UsePipes } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule) // 创建 Nest 应用实例
  // app.useGlobalPipes(new HdPipe()) // 管道HdPipe对全局进行处理
  await app.listen(3000) // 监听端口
}
bootstrap()
