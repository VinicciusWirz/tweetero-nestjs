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
    return "I'm okay!";
  }

  signup(body: SignUpUserDTO): void {
    const user = new User(body.username, body.avatar);
    this.users.push(user);
  }
}
