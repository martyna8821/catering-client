import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../User';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: User = {username: 'qa', password: ''};
 
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

  login() {
      let url = 'http://localhost:8080/api/login';
    console.log("jeden");
      let result = this.http.post<Observable<boolean>>(url, this.model).subscribe(isValid => {
       
        if (isValid) {
          sessionStorage.setItem(
            'token', 
            btoa(this.model.username + ':' + this.model.password)
          );
      this.router.navigate(['']);
      } else {
          alert("Authentication failed.")
      }
    });
  }
}
