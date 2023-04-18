import { PrismaClient } from '@prisma/client'
import { create } from '../helper'
import { Random } from 'mockjs'

export function user(count: number) {
  create(count, async (prisma: PrismaClient) => {
    await prisma.treecko_user.create({
      data: {
        name: Random.cname(),
        password: Random.string(6, 10),
        email: Random.email(),
        phone: Random.string('number', 11),
        avatar: Random.image('200x100', '#50B347', '#FFF', 'png', 'avatar'),
        github: Random.url('https', 'github.com'),
      },
    })
  })
}
