import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/User';
import { UserService } from '../shared/service/UserService';
import { TokenStorageService } from '../authentication/service/token-storage.service';
import { UserDTO } from '../shared/model/UserDTO';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  editMode=false;
  user: User;
  userDto: UserDTO;
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
