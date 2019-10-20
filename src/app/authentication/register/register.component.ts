import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from '../model/RegisterRequest';
import { AuthenticationService } from '../service/authentication.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/shared/service/UserService';
import { Address } from 'src/app/authentication/model/Address';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  personalDetailsGroup: FormGroup;
  hide = true;
  reapetedPassword = '';

  roleAdmin: boolean;
  roleClient: boolean;
  roleDietitian: boolean;

model: RegisterRequest = {username: '', password: '', firstName: '', lastName: '', 
                            email: '', phoneNumber: '', address: {
                              city: '',  houseNumber: '', zipCode: '', street: ''
                            }, roles: []};

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
                  houseNumber: [''],
                  zipCode: [''],
                  street: ['']
                });
      
              
              }

  ngOnInit() {
    if(!this.checkIfLoggedAdmin()){
      this.roleClient = true;
    }
  }

  
  register(){
    if(this.roleAdmin === true){
      this.model.roles.push("ROLE_ADMIN");
    }

    if(this.roleDietitian === true){
      this.model.roles.push("ROLE_DIETITIAN");
    }

    if(this.roleClient ===true){
      this.model.roles.push("ROLE_CLIENT");
    }

    this.authenticationService.register(this.model).subscribe(
      data => {
    
     //   this.roles = this.tokenStorage.getAuthorities();
     if(this.checkIfLoggedAdmin()){
        this.router.navigate(['admin/user-list']);
     }
     else{
      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUsername(data.username);
      this.tokenStorage.saveAuthorities(data.authorities);
      this.tokenStorage.saveUserId(data.userId);
      this.router.navigate(['']);
     }
       
      },
      error => {
        console.log("register error");
      }
    );
  }


  checkIfLoggedAdmin(): boolean{
    if(this.tokenStorage.getToken() != null && this.tokenStorage.getAuthorities().includes("ROLE_ADMIN")){
      return true;
    }
    else{
      return false;
    }
  }

}
