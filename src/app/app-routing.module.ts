import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', children: [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: 'client', loadChildren: './client/client.module#ClientModule'},
    { path: 'dietitian', loadChildren: './dietitian/dietitian.module#DietitianModule'},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}]},
  { path: 'user-details', component: UserDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
