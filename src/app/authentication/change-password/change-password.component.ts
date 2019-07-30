import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  password = '';
  repeatedPassword = '';
  constructor(private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService) { }

  @Input() userId: string;
  //@Input() : string;
  ngOnInit() {
  }


  changePassword(){
    if(this.checkPassword()){
        this.authenticationService.changePassword(this.password, this.userId).subscribe(
          data =>{  
            
           }
        );
    }
    else{
      const dialogRef = this.dialog.open(PasswordChangedDialog, {


      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.router.navigate(['']);
      }
      );
    }
  }

  checkPassword(): boolean{
    
    if(this.password === this.repeatedPassword)
      return true;
    else 
      return false;
  }
}


@Component({
  selector: 'password-changed-dialog',
  templateUrl: 'password-changed-dialog.html',
})
export class PasswordChangedDialog { 

  constructor(
    public dialogRef: MatDialogRef<PasswordChangedDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}