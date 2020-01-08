import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthenticatedGuard } from './authentication/guard/AuthenticatedGuard';
//import { AdminGuard } from './authentication/guard/AdminGuard';
import { ClientGuard } from './authentication/guard/ClientGuard';
import { DietitianGuard } from './authentication/guard/DietitianGuard';
import { AdminGuard } from './authentication/guard/AdminGuard';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', children: [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'},
    { path: 'client', loadChildren: './client/client.module#ClientModule', canActivate: [ClientGuard]},
    { path: 'dietitian', loadChildren: './dietitian/dietitian.module#DietitianModule', canActivate: [DietitianGuard]},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard]}]},
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthenticatedGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
