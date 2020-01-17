import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ChangePasswordComponent, PasswordChangedDialog } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@NgModule({
  imports: [

    SecurityRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    RegisterComponent
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
    ],

    providers:[
      { provide: MatDialogRef, useValue: {} },
      { provide: MAT_DIALOG_DATA, useValue: [] }

    ]

  })
export class SecurityModule { }
