import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from '../core/home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CreateDietComponent } from './create-diet/create-diet.component';
import { ManageDietComponent } from './manage-diet/manage-diet.component';

const adminRoutes: Routes = [
    { path: 'user-list', component: UserListComponent},
    { path: 'add-user', component: AddUserComponent},
    { path: 'create-diet', component:CreateDietComponent},
    { path: 'manage-diet', component: ManageDietComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(adminRoutes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}