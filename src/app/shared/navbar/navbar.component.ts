import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit() {
  }

  isLogged(): boolean{
   if( this.tokenStorage.getToken() === null){
     return false;
   }
   else 
   return true;
  }

  logOut(){
    this.tokenStorage.logOut();
  }

}
