import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: '', children: [
    { path: '', loadChildren: './authentication/authentication.module#AuthenticationModule'}
  ]},
  { path: '', children: [
    { path: 'client', loadChildren: './client/client.module#ClientModule'},
    { path: 'dietician', loadChildren: './dietician/dietician.module#DieticianModule'},
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
