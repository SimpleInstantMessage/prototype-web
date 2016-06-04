import { Component } from '@angular/core';

import { AccountService } from './account.service'
import { AccountComponent } from './account'

@Component({
  moduleId: module.id,
  selector: 'prototype-web-app',
  templateUrl: 'prototype-web.component.html',
  styleUrls: ['prototype-web.component.css'],
  directives: [AccountComponent],
  providers: [AccountService]
})
export class PrototypeWebAppComponent {
  title = 'prototype-web works!';
}
