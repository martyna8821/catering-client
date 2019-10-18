import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from '../home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

const adminRoutes: Routes = [
    { path: 'user-list', component: UserListComponent},
    { path: 'add-user', component: AddUserComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}