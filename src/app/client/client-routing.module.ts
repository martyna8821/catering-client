import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from './order/order.component';

const clientRoutes: Routes = [
    { path: 'order', component: OrderComponent},
];

@NgModule({
  imports: [ RouterModule.forChild(clientRoutes) ],
  exports: [ RouterModule ]
})
export class ClientRoutingModule {}