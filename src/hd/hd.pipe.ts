import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class HdPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    return metadata.metatype === Number ? +value : value
  }
}
