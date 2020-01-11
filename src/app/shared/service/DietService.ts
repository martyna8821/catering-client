import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Diet } from '../model/Diet';
import { DietInput } from '../model/DietInput';


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
  
    add(dietToCreate: DietInput): Observable<Diet>{
        console.log("posting new diet");
        return this.http.post<Diet>(this.apiUrl, dietToCreate);        
    }

    getAll(): Observable<Diet[]>{
 
      return this.http.get<Diet[]>(this.apiUrl);
    }

    sendImage(image: any[]): Observable<Diet>{
      return this.http.post<Diet>(this.apiUrl, image);
    }

    deleteById(id: string): Observable<''>{
      return this.http.delete<''>(this.apiUrl+'/'+id);
    }

    changeStatus(published: boolean, dietId: string): Observable<"">{
      return this.http.patch<"">(this.apiUrl+'/'+dietId+'/'+published, published);
    }

    addNewCaloricVersion(caloricVersion: string, dietId: string): Observable<Diet>{
      return this.http.patch<Diet>(this.apiUrl+'/'+dietId+'/caloric-version', caloricVersion);
    }
}