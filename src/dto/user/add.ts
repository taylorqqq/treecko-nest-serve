import { IsString, IsNotEmpty } from 'class-validator'
// 数据传输对象 DTO

// 如果使用接口，那么在编译时就无法发现错误 ts ==> js 时 会被忽略
// 使用类是为了在编译时就能发现错误
export default class AddUserDto {
  @IsString({
    message: '姓名必须为字符串',
  })
  @IsNotEmpty({
    message: '姓名不能为空',
  })
  name: string

  @IsString({
    message: '密码必须为字符串',
  })
  @IsNotEmpty({
    message: '密码不能为空',
  })
  password: string
}
