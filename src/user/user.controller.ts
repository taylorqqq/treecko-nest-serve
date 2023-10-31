import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from './decorators/user.decorator'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'
import { SearchParams } from './interface/interface'
import { Role } from './enum'

@Controller('user')
export class UserController {
  constructor(private user: UserService) {}
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.user.register(dto)
  }
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.user.login(dto)
  }

  @Get('list')
  // @User(Role.ADMIN)
  list(@Query() query: SearchParams) {
    console.log(query)
    return this.user.findAll(query)
  }
}
