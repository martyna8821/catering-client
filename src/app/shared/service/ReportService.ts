import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RecipeInput } from '../model/RecipeInput';
import { Observable } from 'rxjs';
import { Recipe } from '../model/Recipe';


@Injectable({
  providedIn: 'root',
})
export class ReportService {
    private apiUrl = 'http://localhost:8080/api/reports';

    constructor( 
        private http: HttpClient,
        private router: Router
      ){}

      getAll(): Observable<any>{

        let headers = new HttpHeaders();
        headers = headers.set('Accept', 'application/pdf');
        return this.http.get<any>(this.apiUrl+'/kitchen/2020-01-20', { headers: headers, responseType: 'blob' as 'json' });
      }
  
}