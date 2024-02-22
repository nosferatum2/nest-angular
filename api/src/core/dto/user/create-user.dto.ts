import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {

  @IsEmail()
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsNotEmpty({ message: 'First name is required' })
  firstName: string;

  @IsNotEmpty({ message: 'Last name is required' })
  lastName: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;

}
