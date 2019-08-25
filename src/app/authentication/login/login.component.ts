import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../model/LoginRequest';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginRequest = {username: '', password: ''};
  isLoggedIn = false;
  roles: string[] = [];

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
      sessionStorage.setItem('token', '');
  }

  login() {
     this.authenticationService.login(this.model).subscribe(
       data => {
         this.tokenStorage.saveToken(data.token);
         this.tokenStorage.saveUsername(data.username);
         this.tokenStorage.saveAuthorities(data.authorities);
         this.tokenStorage.saveUserId(data.userId);
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getAuthorities();
         this.router.navigate([this.roles[0].toLowerCase().substring(5)]);
         
       },
       error => {
         console.log("login error");
       }
     );
 
  }
}
