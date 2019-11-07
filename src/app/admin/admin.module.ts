import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateDietComponent } from './create-diet/create-diet.component';



@NgModule({
  declarations: [
    UserListComponent,

    AddUserComponent,

    CreateDietComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    AuthenticationModule
  ],
  entryComponents:[

  ]
})
export class AdminModule { 



}
