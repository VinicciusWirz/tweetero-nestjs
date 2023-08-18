import { User } from './user.entity';

export class Tweet {
  constructor(
    private user: User,
    private _tweet: string,
  ) {}
  get tweet() {
    return this._tweet;
  }
}
