import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service'

@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(public accountService: BackendService) {}

  ngOnInit() {
  }

}
