import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './security/login/login.component';
import { UserDetailsComponent } from './shared/components/user-details/user-details.component';
import { AuthenticatedGuard } from './security/guard/AuthenticatedGuard';
import { ClientGuard } from './security/guard/ClientGuard';
import { DietitianGuard } from './security/guard/DietitianGuard';
import { AdminGuard } from './security/guard/AdminGuard';


const routes: Routes = [ 
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', children: [
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
