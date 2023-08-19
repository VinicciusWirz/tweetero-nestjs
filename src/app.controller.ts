import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
  HttpException,
  Query,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TweetDTO } from './dtos/tweet.dto';
import { SignUpUserDTO } from './dtos/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-up')
  signup(@Body() body: SignUpUserDTO): void {
    return this.appService.signup(body);
  }

  @Post('tweets')
  postTweet(@Body() body: TweetDTO): void {
    try {
      return this.appService.postTweet(body);
    } catch (error) {
      if (error.message === 'UNAUTHORIZED') {
        throw new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED);
      }
    }
  }

  @Get('tweets')
  getTweets(
    @Query('page', new ParseIntPipe({ optional: true }))
    page?: number | null,
  ) {
    try {
      return this.appService.getTweets(page);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('tweets/:username')
  getTweetsFromUser(@Param('username') username: string) {
    return this.appService.getTweetsFromUser(username);
  }
}
