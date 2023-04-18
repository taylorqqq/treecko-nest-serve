import { PrismaClient } from '@prisma/client'
import { create } from '../helper'
import { Random } from 'mockjs'

export async function category(count: number) {
  create(count, async (prisma: PrismaClient) => {
    await prisma.treecko_category.create({
      data: {
        title: Random.ctitle(2, 5),
        description: Random.cparagraph(1, 10),
      },
    })
  })
}
