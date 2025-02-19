import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/security/service/token-storage.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ReportService } from '../../shared/service/ReportService';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorageService,
              private router: Router,
              private reportService: ReportService) { }
  userRoles: string[];
  kitchenReportDialogDisplay = false;
  ngOnInit() {
  
    this.userRoles  = this.tokenStorage.getAuthorities();
  }

  onLoggedIn($event){
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
    this.navigate("/home");
  }

  containsElement(list: string[], element: string): boolean{

  var  contains = false; 
    list.forEach(
          e =>{ if(e === element){ 
            contains= true;}
          });

      return contains;    
  }


  navigate(link: string){
    this.router.navigateByUrl(link);
  }

  downloadKitchenReport(){
    this.reportService.getAll().subscribe(
      (response) => {
        var blob = new Blob([response]);
        saveAs(blob, 'report.pdf');
    }
    );
    this.kitchenReportDialogDisplay = false;
  }

  showKitcheReportDialog(){
    this.kitchenReportDialogDisplay = true;
  }


}
