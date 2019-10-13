import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ChangePasswordComponent, PasswordChangedDialog } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  imports: [

    AuthenticationRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    RetrievePasswordComponent, 
    ChangePasswordComponent,
    PasswordChangedDialog,
    ResetPasswordComponent,
  ],


    entryComponents: [
      PasswordChangedDialog
    ]
  })
export class AuthenticationModule { }
