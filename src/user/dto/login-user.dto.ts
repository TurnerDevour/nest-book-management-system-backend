import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  username: string;
  @IsNotEmpty({ message: '密码不能为空' })
  @MaxLength(20, { message: '密码长度不能大于20' })
  @MinLength(6, { message: '密码长度不能小于6' })
  password: string;
}
