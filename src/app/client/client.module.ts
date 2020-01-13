import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';
import { MenuViewComponent } from './menu-view/menu-view.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';



@NgModule({
  declarations: [OrderComponent, OrderListComponent, MenuViewComponent, MenuDetailsComponent],
  imports: [
    ClientRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ClientModule { }
