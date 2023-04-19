import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class AddPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata)
    if (!value.name) {
      throw new BadRequestException('姓名不能为空')
    }
    if (!value.password) {
      throw new BadRequestException('密码不能为空')
    }
    return value
  }
}
