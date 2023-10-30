import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { AuthService } from './auth.service'
import { Auth } from './decorators/auth.decorator'
import LoginDto from './dto/login.dto'
import RegisterDto from './dto/register.dto'
import { SearchParams } from './interface/interface'
import { Role } from './enum'

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}
  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto)
  }
  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.auth.login(dto)
  }

  @Get('all')
  // @Auth(Role.ADMIN)
  all(@Query() query: SearchParams) {
    console.log(query)
    return this.auth.findAll(query)
  }
}
