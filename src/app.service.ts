import { Injectable } from '@nestjs/common';
import { TweetDTO } from './dtos/tweet.dto';
import { SignUpUserDTO } from './dtos/user.dto';
import { Tweet } from './entities/tweet.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];
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

  postTweet(body: TweetDTO): void {
    const userInDB = this.users.filter(
      (user) => user.username === body.username,
    );
    if (!userInDB[0]) throw new Error('UNAUTHORIZED');

    this.tweets.push(new Tweet(userInDB[0], body.tweet));
  }
}
