import { Component, OnInit } from '@angular/core';

import { AccountService } from '../account.service'
import { ChatroomService } from '../chatroom.service'

@Component({
  moduleId: module.id,
  selector: 'app-chatroom',
  templateUrl: 'chatroom.component.html',
  styleUrls: ['chatroom.component.css'],
  providers: [ ChatroomService ]
})
export class ChatroomComponent implements OnInit {

  constructor(public chatroomService: ChatroomService, accountService: AccountService) {
    chatroomService.currentAccount = accountService.currentAccount;
  }

  ngOnInit() {
  }

}
