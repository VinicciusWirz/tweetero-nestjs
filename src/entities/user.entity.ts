export class User {
  constructor(
    private _username: string,
    private _avatar: string,
  ) {}

  get username() {
    return this._username;
  }
  get avatar() {
    return this._avatar;
  }
}
