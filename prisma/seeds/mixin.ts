import { PrismaClient } from '@prisma/client'
import { create } from '../helper'

export async function mixin(count: number, table: any, data: Record<string, any>) {
  await create(count, async (prisma: PrismaClient) => {
    await prisma[table].create({
      data,
    })
  })
}
