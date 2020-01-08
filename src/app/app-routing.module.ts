import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from './authentication/guard/auth-guard';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', children: [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: 'client', loadChildren: './client/client.module#ClientModule', canActivate: [AuthGuard]},
    { path: 'dietitian', loadChildren: './dietitian/dietitian.module#DietitianModule', canActivate: [AuthGuard]},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},]},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
