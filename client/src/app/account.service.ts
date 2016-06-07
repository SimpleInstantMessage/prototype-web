import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'

import { environment } from './';
import { Account } from './shared/account.model'

@Injectable()
export class AccountService {

  socket = io(environment.apiUrl);

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
    this.socket.emit('add user', uid);
  }

  logout() {
    this.isLogin = false;
    this.currentAccount = null;
  }

}
