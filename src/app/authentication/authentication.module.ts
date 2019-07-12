import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [

    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule { }
