import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as io from 'socket.io-client'

import { environment } from './environment';
import { Account } from './shared/account.model'

class NewMessage {
  username: string;
  message: any;
  sendTime: Date;
}

@Injectable()
export class BackendService {

  socket:SocketIOClient.Socket;
  private newMessageEventBus = new Subject<NewMessage>();

  isLogin: boolean = false;
  currentAccount: Account;

  constructor() {
    this.socket = io(environment.apiUrl);
    this.socket.on('new message', (data)=>{
      this.newMessageEventBus.next({username: data.username, message: data.message.message, sendTime: new Date(data.message.sendTime)});
    })
  }

  onNewMessage() {
    return this.newMessageEventBus.asObservable();
  }

  //TODO async
  //TODO uid or password is empty
  login(uid: string, password: string) {
    console.log("login() is called.");
    console.log(`uid: ${uid}, password: ${password}`);
    this.isLogin = true;
    this.currentAccount = {id: uid};
    this.socket.emit('login', uid);
  }

  logout() {
    this.socket.emit('logout');
    this.isLogin = false;
    this.currentAccount = null;
  }

  sendMessage(message: any) {
    this.socket.emit('new message', {message, sendTime: new Date().getTime()});
  }

}
