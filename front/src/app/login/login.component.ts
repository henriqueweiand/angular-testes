import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/RX';
import { Response } from '@angular/http';

import { UtilitiesService } from './../shared/utilities.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private login: any[] = [];

  constructor(
    private _loginService: LoginService,
  ) { }

  ngOnInit() {
  }

  onSubmit(form, event) {
    event.preventDefault();
    this._loginService.fazerLogin(form.value);    
  }

}
