import { Injectable } from '@angular/core';

import { Account } from './shared/account.model'
import { ChatLog } from './shared/chat.model'

@Injectable()
export class ChatroomService {

  currentAccount: Account;

  //TODO set max size(memory)
  chatlog: ChatLog[] = [];

  constructor() {}

  sendMessage(message: any) {
    this.chatlog.push({senderId: this.currentAccount.id, message: message, sendTime: new Date()});
  }

}
