import { Injectable } from '@angular/core';

import { Account } from './shared/account.model'

@Injectable()
export class AccountService {

  isLogin: boolean = false;
  currentAccount: Account;

  constructor() {}

  //TODO async
  //TODO uid or password is empty
  login(uid: string, password: string) {
    console.log("login() is called.");
    console.log(`uid: ${uid}, password: ${password}`);
    this.isLogin = true;
    this.currentAccount = {id: uid};
  }

  logout() {
    this.isLogin = false;
    this.currentAccount = null;
  }

}
