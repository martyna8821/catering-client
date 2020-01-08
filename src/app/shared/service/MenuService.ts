import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from '../model/Menu';
import { MenuInput } from '../model/MenuInput';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private apiUrl = 'http://localhost:8080/api/menus';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}

    add(menuToCreate: MenuInput): Observable<Menu>{
        return this.http.post<Menu>(this.apiUrl, menuToCreate);        
    }

    getAll(): Observable<Menu[]>{
 
      return this.http.get<Menu[]>(this.apiUrl);
    }

}