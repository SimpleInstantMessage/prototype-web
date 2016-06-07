import { Component } from '@angular/core';

import { BackendService } from './backend.service'
import { AccountComponent } from './account'
import { ChatroomComponent } from './chatroom'

@Component({
  moduleId: module.id,
  selector: 'prototype-web-app',
  templateUrl: 'prototype-web.component.html',
  styleUrls: ['prototype-web.component.css'],
  directives: [AccountComponent, ChatroomComponent],
  providers: [BackendService]
})
export class PrototypeWebAppComponent {

  title = 'prototype-web works!';

  constructor(public accountService: BackendService) {}

}
