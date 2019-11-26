import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderInput } from '../model/OrderInput';
import { Order } from '../model/Order';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiUrl = 'http://localhost:8080/api/orders';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}
  
    add(orderToCreate: OrderInput): Observable<Order>{
        return this.http.post<Order>(this.apiUrl, orderToCreate);        
    }

    getAll(): Observable<Order[]>{
 
      return this.http.get<Order[]>(this.apiUrl);
    }
}