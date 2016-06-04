import { Component } from '@angular/core';

import { AccountService } from './account.service'
import { AccountComponent } from './account'
import { ChatroomComponent } from './chatroom'

@Component({
  moduleId: module.id,
  selector: 'prototype-web-app',
  templateUrl: 'prototype-web.component.html',
  styleUrls: ['prototype-web.component.css'],
  directives: [AccountComponent, ChatroomComponent],
  providers: [AccountService]
})
export class PrototypeWebAppComponent {

  title = 'prototype-web works!';

  constructor(public accountService: AccountService) {}

}
