import { User } from './user.entity';

export class Tweet {
  constructor(
    private _user: User,
    private _tweet: string,
  ) {}

  get tweet() {
    return this._tweet;
  }
  get user() {
    return this._user;
  }
}

export class TweetDelivery {
  constructor(
    private username: string,
    private avatar: string,
    private tweet: string,
  ) {}
}
