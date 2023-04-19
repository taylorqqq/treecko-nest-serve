import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, UsePipes } from '@nestjs/common'
import { AppService } from './app.service' // 1.从容器中获取服务 2.提供类型支持
import { PrismaClient } from '@prisma/client'
import { HdPipe } from './hd/hd.pipe'

@Controller() // 装饰器 @Controller() 用于标识一个控制器
// @UsePipes(HdPipe) // 装饰器 @UsePipes() 对整个控制器进行处理
export class AppController {
  prisma: PrismaClient
  constructor(private readonly appService: AppService) {
    this.prisma = new PrismaClient()
  } // 依赖注入

  // @Get(':id') // 装饰器 @Get() 用于标识一个路由
  // // HdPipe 等价于 ParseIntPipe
  // // @UsePipes(HdPipe) //装饰器 @UsePipes() 对单个路由进行处理
  // getHello(@Param('id', HdPipe) id: number): any {
  //   // HdPipe 对参数进行处理
  //   // getHello(@Param('id') id: number): any {
  //   // 路由处理函数
  //   // return this.appService.getHello()

  //   // console.log(typeof id) // string
  //   // return id
  //   return this.prisma.treecko_user.findUnique({
  //     where: {
  //       id,
  //     },
  //   })
  // }

  @Get() // 装饰器 @Get() 用于标识一个路由
  // HdPipe 等价于 ParseIntPipe
  // @UsePipes(HdPipe) //装饰器 @UsePipes() 对单个路由进行处理
  getHello(@Param('id', new DefaultValuePipe(1), ParseIntPipe) id: number): any {
    // HdPipe 对参数进行处理
    // getHello(@Param('id') id: number): any {
    // 路由处理函数
    // return this.appService.getHello()

    // console.log(typeof id) // string
    // return id
    return this.prisma.treecko_user.findUnique({
      where: {
        id,
      },
    })
  }
}
