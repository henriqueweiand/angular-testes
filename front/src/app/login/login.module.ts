import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StructModule } from './../struct/struct.module';
import { LoginRoutingModule } from './login.routing.module';
import { UtilitiesService } from './../shared/utilities.service';
import { LoginService } from './login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StructModule,
    LoginRoutingModule,    
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    UtilitiesService,
    LoginService    
  ]
})
export class LoginModule { }
