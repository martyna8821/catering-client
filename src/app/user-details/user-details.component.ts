import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User';
import { UserService } from '../shared/service/UserService';
import { TokenStorageService } from '../authentication/service/token-storage.service';
import { UserDTO } from '../shared/model/UserDTO';


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
  user: User;
  userDto: UserDTO;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private userService: UserService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.userService.getUserById(this.tokenStorageService.getUserId()).subscribe(
     user => { 
      this.user = user;
      console.log("user:");
      console.log(user.username);
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

}
