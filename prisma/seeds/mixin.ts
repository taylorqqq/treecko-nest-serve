import { PrismaClient } from '@prisma/client'
import { create } from '../helper'

export function mixin(count: number, table: any, data: Record<string, any>) {
  create(count, async (prisma: PrismaClient) => {
    await prisma[table].create({
      data,
    })
  })
}
