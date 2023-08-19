import { Injectable } from '@nestjs/common';
import { TweetDTO } from './dtos/tweet.dto';
import { SignUpUserDTO } from './dtos/user.dto';
import { Tweet, TweetDelivery } from './entities/tweet.entity';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  private users: User[];
  private tweets: Tweet[];
  constructor() {
    this.users = [];
    this.tweets = [];
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

  getTweets(page: number = 1) {
    if (page < 1) {
      throw new Error('Informe uma página válida!');
    }
    const numberOfTweets = 15;
    const start = (page - 1) * numberOfTweets;
    const end = start + numberOfTweets;

    const lastTweets = this.tweets.slice(-end, start ? -start : undefined);
    const formatTweets = lastTweets.map(
      (t) => new TweetDelivery(t.user.username, t.user.avatar, t.tweet),
    );

    return formatTweets.reverse();
  }

  getTweetsFromUser(username: string) {
    const filterTweets = this.tweets.filter(
      (t) => t.user.username === username,
    );
    const formatTweets = filterTweets.map(
      (t) => new TweetDelivery(t.user.username, t.user.avatar, t.tweet),
    );
    return formatTweets.reverse();
  }
}
