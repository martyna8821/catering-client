import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../model/RegisterRequest';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

model: RegisterRequest = {username: '', password: '', firstName: '', lastName: '', 
                            email: '', roles: ['ROLE_CLIENT']};

  constructor(private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private router: Router) { }

  ngOnInit() {
  }

  register(){

    this.authenticationService.register(this.model).subscribe(
      data => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);
        this.tokenStorage.saveUserId(data.userId);
     //   this.roles = this.tokenStorage.getAuthorities();
        this.router.navigate(['']);
      },
      error => {
        console.log("register error");
      }
    );
  }

}
