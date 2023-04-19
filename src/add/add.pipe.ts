import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common'
import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'

@Injectable()
export class AddPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    const object = plainToInstance(metadata.metatype, value) // 将 value 转换为 metadata.metatype 类的实例
    const errors = validateSync(object)
    if (errors.length) {
      // const firstError = Object.values(errors[0].constraints)[0] || '参数错误'
      // throw new BadRequestException(firstError)

      const errorMessages = errors.map((error) => {
        return {
          name: error.property,
          message: Object.values(error.constraints).map((v) => v),
        }
      })
      throw new HttpException(errorMessages, HttpStatus.BAD_REQUEST)
    }
    // if (!value.name) {
    //   throw new BadRequestException('姓名不能为空')
    // }
    // if (!value.password) {
    //   throw new BadRequestException('密码不能为空')
    // }
    return value
  }
}
