import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'

// 自定义验证器
@ValidatorConstraint({
  name: 'IsConfirmedRule',
  async: false, //这里是关键，表示这个验证器是否是异步
})

// 自定义类验证器
export class IsConfirmedRule implements ValidatorConstraintInterface {
  validate(value: string, args: ValidationArguments) {
    // const [relatedPropertyName] = args.constraints
    // const relatedValue = (args.object as any)[relatedPropertyName]
    // return value === relatedValue
    return value === args.object[args.property + '_confirmed']
  }

  defaultMessage(args: ValidationArguments) {
    return '两次输入的密码不一致'
  }
}
