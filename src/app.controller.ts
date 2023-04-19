import { Controller, Get, Param } from '@nestjs/common'
import { AppService } from './app.service' // 1.从容器中获取服务 2.提供类型支持
import { PrismaClient } from '@prisma/client'

@Controller() // 装饰器 @Controller() 用于标识一个控制器
export class AppController {
  prisma: PrismaClient
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  } // 依赖注入

  @Get(':id') // 装饰器 @Get() 用于标识一个路由
  getHello(@Param('id') id: number): any {
    // 路由处理函数
    // return this.appService.getHello()

    // console.log(typeof id) // string
    // return id

    // id 是BigInt类型
    return this.prisma.treecko_user.findUnique({
      where: {
        id: 1,
      },
    })
  }
}
