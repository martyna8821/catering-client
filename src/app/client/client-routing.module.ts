import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { MenuViewComponent } from './menu-view/menu-view.component';

const clientRoutes: Routes = [
    { path: 'order', component: OrderComponent},
    { path: 'order-list', component: OrderListComponent},
    { path: 'menu-list', component: MenuViewComponent}
  ];

@NgModule({
  imports: [ RouterModule.forChild(clientRoutes) ],
  exports: [ RouterModule ]
})
export class ClientRoutingModule {}