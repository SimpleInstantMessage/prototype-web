import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription'

import { BackendService } from '../backend.service'
import { ChatLog } from '../shared/chat.model'

@Component({
  moduleId: module.id,
  selector: 'app-chatroom',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  //TODO set max size(memory)
  chatlogs: ChatLog[] = [];

  constructor(private backend: BackendService) {
  }

  ngOnInit() {
    this.subscription = this.backend.onNewMessage().subscribe((event)=>{
      this.chatlogs.push({senderId: event.username, message: event.message, sendTime: event.sendTime});
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sendMessage(message: any) {
    this.chatlogs.push({senderId: this.backend.currentAccount.id, message: message, sendTime: new Date()});
    this.backend.sendMessage(message);
  }

}
