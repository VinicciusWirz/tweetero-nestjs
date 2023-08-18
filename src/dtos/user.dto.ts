import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class SignUpUserDTO {
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsUrl(undefined, { message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  avatar: string;
}
