import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User';
import { UserService } from '../shared/service/UserService';
import { TokenStorageService } from '../authentication/service/token-storage.service';
import { UserDTO } from '../shared/model/UserDTO';
import { MatDialog } from '@angular/material/dialog';
import { ChangePasswordComponent } from '../authentication/change-password/change-password.component';
import { CloseScrollStrategyConfig } from '@angular/cdk/overlay/typings/scroll/close-scroll-strategy';


export interface Tile {
  cols: number;
  rows: number;
  text: string;
  color:string;
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  editMode=false;
  profileOwner: User;
  userDto: UserDTO;
  username: string;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService,
              public dialog: MatDialog) 
              { }

  ngOnInit() {
    this.username = this.tokenStorageService.getUserName();
    this.userService.getUserByUsername(this.username).subscribe(
      user => { 
        this.profileOwner = user;
      }
    );
  }

  enableEditMode(){
    this.editMode = true;
  }

  disableEditMode(){
    this.editMode = false;
  }

  isEditModeEnabled(): boolean{
    return this.editMode;
  }

  isEditModeDisabled(): boolean{
    return !this.editMode;
  }

  changePasswordDialog(){
    const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '600px',
      data: {isDialog: true}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


