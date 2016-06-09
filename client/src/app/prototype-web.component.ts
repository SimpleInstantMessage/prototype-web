import { Component } from '@angular/core';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'

import { BackendService } from './backend.service'
import { AccountComponent } from './account'
import { ChatroomComponent } from './chatroom'

@Component({
  moduleId: module.id,
  selector: 'prototype-web-app',
  templateUrl: 'prototype-web.component.html',
  styleUrls: ['prototype-web.component.css'],
  directives: [MD_TOOLBAR_DIRECTIVES, AccountComponent, ChatroomComponent],
  providers: [BackendService]
})
export class PrototypeWebAppComponent {

  title = 'prototype-web';

  constructor(public accountService: BackendService) {}

}
