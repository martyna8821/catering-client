import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  imports: [

    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class AuthenticationModule { }
