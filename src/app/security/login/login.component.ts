import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../model/LoginRequest';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginRequest = {username: '', password: ''};
  isLoggedIn = false;
  hide = true;
  roles: string[] = [];


  @Output() loggedIn: EventEmitter<any> = new EventEmitter<any>();

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private tokenStorage: TokenStorageService,
      private snackBar: MatSnackBar
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
         
         this.router.navigateByUrl('/home').then(then => location.reload());
         
       },
       error => {
         this.snackBar.open('Nie udało się zalogować!', '',{
           duration: 3000,
         });
       }
     );
 
  }

  retrievePassword(){
    this.router.navigateByUrl('retrieve-password');
  }
}
