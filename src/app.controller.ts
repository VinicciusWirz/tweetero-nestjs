import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
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
}
