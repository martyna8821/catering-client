import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/UserService';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  providers: [ConfirmationService]
})
export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  expandedElement: User | null;
  dataSource: MatTableDataSource<User>;
  filterValue = '';
  result = '';
  showClients = true;
  showDietitians = true;
  showAdmins = true;

  displayedColumns = ['firstName', 'lastName','username', 'email', 'phoneNumber'];
  columnsToDisplayMap = [  
    {name: 'firstName', display: 'Imię'}, 
    {name: 'lastName', display: 'Nazwisko'},
    {name: 'username', display: 'Nazwa użytkownika'},
    {name: 'email', display: 'Email'},
    {name: 'phoneNumber', display: 'Numer telefonu'   
  }];
  constructor(private userService: UserService,
    public dialog: MatDialog,
    private router: Router,
    private confirmationService: ConfirmationService) { }

  getData(){
  //  var statusQuery = this.buildStatusQuery();
   if (this.showAdmins || this.showClients || this.showDietitians) {
     
   this.userService.getUsers().subscribe(users => {
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.dataSource.filter = this.filterValue.trim().toLowerCase();
            this.applyFilter(this.filterValue);
        });
    }
   else{
      this.dataSource = null;
   }
  }

  ngOnInit() {
    this.getData();
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUserByEmail(userEmail: string, username: string){
    this.confirmationService.confirm({
      message: 'Czy na pewno chesz usunąć wybranego uytkownika?',
      accept: () => {
        this.userService.deleteUserByEmail(userEmail).subscribe(
          res => {this.getData()},
          err =>{ this.getData()}

      );
      }
  });
   
  }

  createNewUser(){
    this.router.navigateByUrl('/admin/add-user');
  }

}