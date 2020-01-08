import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { MatSnackBar } from '@angular/material';
import { removeSummaryDuplicates } from '@angular/compiler';

@Component({
  selector: 'app-retrieve-password',
  templateUrl: './retrieve-password.component.html',
  styleUrls: ['./retrieve-password.component.css']
})
export class RetrievePasswordComponent implements OnInit {


  email: string = '';

  constructor(private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  retrievePassword(){

    this.authenticationService.retrievePassword(this.email).subscribe(
      result =>  this.snackBar.open('Link został wysłany na maila!', '',{
        duration: 3000,
      })
    );
  }

}
