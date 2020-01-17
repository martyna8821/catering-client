import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SecurityModule } from '../security/security.module';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { ManageDietComponent } from './manage-diet/manage-diet.component';
import { DietsListComponent } from '../shared/components/diets-list/diets-list.component';



@NgModule({
  declarations: [
    UserListComponent,

    AddUserComponent,

    CreateDietComponent,

    ManageDietComponent],
  imports: [
    AdminRoutingModule,
    SharedModule,
    CommonModule,
    SecurityModule
  ],
  entryComponents:[

  ]
})
export class AdminModule { 



}
