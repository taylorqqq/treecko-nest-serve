import { Injectable } from '@nestjs/common'

@Injectable() // 装饰器 @Injectable() 用于标识一个类可以被依赖注入 如果没有
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }
}
