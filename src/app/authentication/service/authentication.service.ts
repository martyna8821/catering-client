import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../model/LoginRequest';
import { LoginResponse } from '../model/LoginResponse';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../model/RegisterRequest';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}

  login(userLogin: LoginRequest): Observable<LoginResponse>{

    return this.http.post<LoginResponse>(this.apiUrl+'auth/login', userLogin);
  }

  register(registerRequest: RegisterRequest): Observable<LoginResponse>{
    return this.http.post<LoginResponse>(this.apiUrl+'users/register', registerRequest);
  }

  retrievePassword(userEmail: string): Observable<string>{
 
      return this.http.post<string>(this.apiUrl+'auth/password-token', userEmail);
  }
}
