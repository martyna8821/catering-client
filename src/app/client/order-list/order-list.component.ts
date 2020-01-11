import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/shared/model/Order';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { OrderService } from 'src/app/shared/service/OrderService';
import { TokenError } from '@angular/compiler/src/ml_parser/lexer';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  displayedColumns = ['orderDate', 'diet.name', 'diet.caloricVersion', 
                      'startDate', 'endDate', 'price', 'deliveryTime', 'deliveryAddress'];


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
 
  ordersDataSource: MatTableDataSource<Order>;
  constructor(private orderService: OrderService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
      this.orderService.getUserOrders(this.tokenStorageService.getUserId())
                                      .subscribe( orders => { 
                                          this.ordersDataSource = new MatTableDataSource(orders);
                                            this.ordersDataSource.sort = this.sort;
                                            this.ordersDataSource.paginator = this.paginator;
                                            }
                                  
                                      );
    }

}
