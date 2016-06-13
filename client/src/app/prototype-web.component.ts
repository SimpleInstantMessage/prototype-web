import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav'
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar'

import { BackendService } from './backend.service'
import { AccountComponent } from './account'
import { ChatroomComponent } from './chatroom'

@Component({
  moduleId: module.id,
  selector: 'prototype-web-app',
  templateUrl: 'prototype-web.component.html',
  styleUrls: ['prototype-web.component.css'],
  directives: [MD_ICON_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, AccountComponent, ChatroomComponent],
  providers: [HTTP_PROVIDERS, MdIconRegistry, BackendService]
})
export class PrototypeWebAppComponent {

  title = 'Prototype Web';

  constructor(public accountService: BackendService) {}

}
