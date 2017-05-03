import { Subscription } from 'rxjs/RX';
import { Component, OnInit } from '@angular/core';

import { UtilitiesService } from './shared/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private logado: boolean = false;

  constructor(
    private _utilitiesService: UtilitiesService,
  ) {
    
  }

  ngOnInit() {
    if(this._utilitiesService.checkLogin)
      this.logado = true;
    else
      this.logado = false;
  }

  ngOnDestroy() {
    
  }

}
