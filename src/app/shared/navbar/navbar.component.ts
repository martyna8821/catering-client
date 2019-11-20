import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }
  userRoles: string[];
  ngOnInit() {
      this.userRoles  = this.tokenStorage.getAuthorities();
    
  }

  isLogged(): boolean{
   if( this.tokenStorage.getToken() === null){
     return false;
   }
   else 
   return true;
  }

  hasRole(role: string): boolean{

    if(this.containsElement(this.userRoles, role)){
      return true;
    }
    else{
      return false;
    }
  }

  logOut(){
    this.tokenStorage.logOut();
  }

  containsElement(list: string[], element: string): boolean{

  var  contains = false; 
    list.forEach(
          e =>{ if(e === element){ 
            contains= true;}
          });

      return contains;    
  }

}
