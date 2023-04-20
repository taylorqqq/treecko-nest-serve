import { ValidationArguments, ValidationOptions, registerDecorator } from 'class-validator'
import { PrismaClient } from '@prisma/client'

// 使用装饰器实现用户唯一验证
export function isNotExistsRule(table: string, options: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isNotExistsRule',
      target: object.constructor,
      propertyName,
      constraints: [table],
      options,
      validator: {
        async validate(value: any, args: any) {
          const prisma = new PrismaClient()
          const result = await prisma[table].findFirst({
            where: {
              [args.property]: value,
            },
          })
          return !result
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} 已存在`
        },
      },
    })
  }
}
