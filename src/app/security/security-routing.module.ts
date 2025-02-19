import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RetrievePasswordComponent } from './retrieve-password/retrieve-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const authenticationRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'retrieve-password', component: RetrievePasswordComponent},
    { path: 'change-password', component: ChangePasswordComponent},
    { path: 'reset-password/:token', component: ResetPasswordComponent}
    
];

@NgModule({
  imports: [ RouterModule.forChild(authenticationRoutes) ],
  exports: [ RouterModule ]
})
export class SecurityRoutingModule {}