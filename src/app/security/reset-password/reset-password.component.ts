import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { MatDialog } from '@angular/material';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string;
  userId: string;
  constructor( private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => { this.token = param.get('token')})
    this.authenticationService.validateToken(this.token).subscribe(
      id => {
        this.userId = id;
      }
     
    );
  }

  
}
