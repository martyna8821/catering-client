import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type:': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor( 
      private http: HttpClient,
      private router: Router
    ){}

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  checkIfUsernameTaken(username: string): boolean{
      var user = this.http.get<User>(this.apiUrl+'/'+username);
      if(user != null){
        return true;
      }
      else{
        return false;
      }

  }

  deleteUserByEmail(userEmail: string){
    return this.http.delete(this.apiUrl+'/'+userEmail);
  }

  getUserById(userId: string): Observable<User>{
    console.log(userId);
    return this.http.get<User>(this.apiUrl+'/'+userId);
  }

  getUserByUsername(username: string): Observable<User>{
    return this.http.get<User>(this.apiUrl+'/'+username);
  }

  editUser(editedUser: User, id: string): Observable<User> {
      return this.http.put<User>(this.apiUrl+"/"+id, editedUser);
  }
}