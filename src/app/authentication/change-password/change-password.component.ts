import { Component, OnInit, Input, Inject } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from '../service/token-storage.service';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  hide = true;
  password = '';
  repeatedPassword = '';
  constructor(private router: Router,
    public dialog: MatDialog,
    private authenticationService: AuthenticationService,
    public dialogRef: MatDialogRef<ChangePasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public isDialog: boolean,
    private tokenStorageService: TokenStorageService) 
    { }

  @Input() userId: string;
  @Input() token: string;

  ngOnInit() {
    console.log(this.isDialog.valueOf());
    if(this.isDialog){
        this.userId = this.tokenStorageService.getUserId();
    }
  }


  changePassword(){
    if(this.checkPassword()){
      this.authenticationService.changePassword(this.password, this.userId).subscribe(
        data =>{  
          this.authenticationService.deletePasswordToken(this.token).subscribe();
          const dialog2 = this.dialog.open(PasswordChangedDialog, {
          });
            
          console.log("is or not");
          console.log(this.isDialog);
          dialog2.afterClosed().subscribe(result =>
              this.router.navigate(['home'])
          );
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

  onNoClick(): void {
    this.dialogRef.close();
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