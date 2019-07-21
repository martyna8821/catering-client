import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css']
})
export class RetrievePasswordComponent implements OnInit {


  email: string = '';

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  retrievePassword(){

    this.authenticationService.retrievePassword(this.email).subscribe();
  }

}
