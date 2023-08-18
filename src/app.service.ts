import { Injectable } from '@nestjs/common';
import { SignUpUserDTO } from './dtos/user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[];
  constructor() {
    this.users = [];
  }

  getHello(): string {
    return 'Hello World!';
  }

  signup(body: SignUpUserDTO) {
    const user = new User(body.username, body.avatar);
    this.users.push(user);
  }
}
