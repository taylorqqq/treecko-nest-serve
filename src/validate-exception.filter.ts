import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common'

@Catch()
export class ValidateExceptionFilterFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp() // 获取上下文
    const response = ctx.getResponse() // 获取响应对象
    if (exception instanceof BadRequestException) {
      const { message } = exception.getResponse() as { message: string[] }

      // 返回错误信息
      return response.status(HttpStatus.BAD_REQUEST).json({
        code: HttpStatus.BAD_REQUEST,
        message: message.map((item) => {
          const info = item.split('-')
          return {
            filed: info[0],
            message: info[1],
          }
        }),
      })
    }
    return response
  }
}
