import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ingredient } from '../model/Ingredient';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private apiUrl = 'http://localhost:8080/api/ingredients';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}

    getAll(): Observable<Ingredient[]>{
 
      return this.http.get<Ingredient[]>(this.apiUrl);
    }

}