import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [UserListComponent],
  imports: [

    AdminRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class AdminModule { 



}
