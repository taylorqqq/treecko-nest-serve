import { PrismaService } from './../prisma/prisma.service'
import { BadRequestException, Injectable } from '@nestjs/common'
import RegisterDto from './dto/register.dto'
import { hash, verify } from 'argon2'
import { treecko_user } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import LoginDto from './dto/login.dto'
import { SearchParams } from './interface/interface'
import { HttpStatus } from '@nestjs/common'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}
  async register(dto: RegisterDto) {
    const user = await this.prisma.treecko_user.create({
      data: {
        name: dto.name,
        password: await hash(dto.password),
      },
    })
    return await this.token(user)
  }

  async token({ name, id }: treecko_user) {
    return {
      token: await this.jwt.signAsync({
        name,
        sub: id,
      }),
    }
  }

  async login(dto: LoginDto) {
    const user = await this.prisma.treecko_user.findUnique({
      where: {
        name: dto.name,
      },
    })

    if (!(await verify(user.password, dto.password))) {
      throw new BadRequestException('密码输入错误')
    }

    return await this.token(user)
  }

  async findAll(query: SearchParams) {
    const { pageNum, pageSize } = query
    const skip = (pageNum - 1) * pageSize
    const take = pageSize * 1
    const list = await this.prisma.treecko_user.findMany({
      skip,
      take,
    })
    const total = await this.prisma.treecko_user.count()
    return {
      data: {
        list,
        total,
        pageNum,
        pageSize,
      },
      code: HttpStatus.OK,
      message: '查询成功',
    }
  }
}
