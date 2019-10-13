import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../model/RegisterRequest';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/shared/service/UserService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  personalDetailsGroup: FormGroup;
  hide = true;
  reapetedPassword = '';

model: RegisterRequest = {username: '', password: '', firstName: '', lastName: '', 
                            email: '', phoneNumber: '', address: {
                              city: '', zipCode: '', street: ''
                            }, roles: ['ROLE_CLIENT']};

  constructor(private authenticationService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private _formBuilder: FormBuilder,
              private userService: UserService) { 
                this.personalDetailsGroup = this._formBuilder.group({
                  userName: ['', Validators.required],
                  password: ['', Validators.minLength(7)],
                  firstName: [''],
                  lastName: [''],
                  email: ['', Validators.email],
                  phoneNumber: [''],
                  city: [''],
                  zipCode: [''],
                  street: ['']
                });
      
              
              }

  ngOnInit() {
    
  }

  
  register(){
    console.log("register");
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
