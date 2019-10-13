import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/UserService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource: MatTableDataSource<User>;
  filterValue = '';
  result = '';
  showClients = true;
  showDietitians = true;
  showAdmins = true;

  displayedColumns = ['firstName', 'lastName','username', 'email'];
  columnsToDisplayMap = [  
    {name: 'firstName', display: 'Imię'}, 
    {name: 'lastName', display: 'Nazwisko'},
    {name: 'username', display: 'Nazwa użytkownika'},
    {name: 'email', display: 'Email'   
  }];
  constructor(private userService: UserService) { }

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
    console.log("init");
    this.getData();
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = this.filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
