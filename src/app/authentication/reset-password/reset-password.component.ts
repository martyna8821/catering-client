import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string;
  userId: string;
  constructor( private route: ActivatedRoute,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param => { this.token = param.get('token')})
    console.log(this.token);
    this.authenticationService.validateToken(this.token).subscribe(
      id => {
        this.userId = id;
        
      }
     
    );
  }

}
