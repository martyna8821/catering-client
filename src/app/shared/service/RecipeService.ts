import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeInput } from '../model/RecipeInput';
import { Recipe } from '../model/Recipe';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'http://localhost:8080/api/recipes';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}
  
    add(recipeToCreate: RecipeInput): Observable<Recipe>{
        return this.http.post<Recipe>(this.apiUrl, recipeToCreate);        
    }

    getAll(): Observable<Recipe[]>{
 
      return this.http.get<Recipe[]>(this.apiUrl);
    }

}