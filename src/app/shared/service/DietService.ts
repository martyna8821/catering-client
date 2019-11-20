import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diet } from '../model/Diet';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class DietService {

  private apiUrl = 'http://localhost:8080/api/diets';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}
  
    add(dietToCreate: Diet): Observable<Diet>{
      console.log("posting");
        return this.http.post<Diet>(this.apiUrl+"/xdd", dietToCreate);        
    }

    getAll(): Observable<Diet[]>{
 
      return this.http.get<Diet[]>(this.apiUrl);
    }

    sendImage(image: any[]): Observable<Diet>{
      return this.http.post<Diet>(this.apiUrl, image);
    }
}