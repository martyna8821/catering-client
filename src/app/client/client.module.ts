import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrderListComponent } from './order-list/order-list.component';



@NgModule({
  declarations: [OrderComponent, OrderListComponent],
  imports: [
    ClientRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class ClientModule { }
