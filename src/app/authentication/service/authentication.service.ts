import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from '../model/LoginRequest';
import { JwtResponse } from '../model/JwtResponse';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const USER_ROLE = 'user_role';
const AUTH_TOKEN = 'auth_token';
const IDENTITY_ID = 'identity_id';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = 'http://localhost:8080/api/auth';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}



  login(userLogin: LoginRequest): Observable<JwtResponse>{

    return this.http.post<JwtResponse>(this.apiUrl+'/login', userLogin);
  }
}
