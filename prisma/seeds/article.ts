import { PrismaClient } from '@prisma/client'
import { create } from '../helper'
import { Random } from 'mockjs'

export function article(count: number) {
  create(count, async (prisma: PrismaClient) => {
    await prisma.treecko_article.create({
      data: {
        title: Random.string(6, 10),
        content: Random.cparagraph(10, 50),
        thumbnail: Random.image('200x100', '#50B347', '#FFF', 'png', 'avatar'),
        categoryId: Random.integer(1, 10),
      },
    })
  })
}
