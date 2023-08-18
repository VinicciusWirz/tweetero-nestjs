import { IsString, IsNotEmpty, IsUrl } from 'class-validator';

export class TweetDTO {
  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  username: string;

  @IsString({ message: 'All fields are required!' })
  @IsNotEmpty({ message: 'All fields are required!' })
  tweet: string;
}
