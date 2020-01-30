import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Menu } from 'src/app/shared/model/Menu';
import { MenuService } from 'src/app/shared/service/MenuService';
import { TokenStorageService } from 'src/app/security/service/token-storage.service';
import { User } from 'src/app/shared/model/User';
import { state, trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-menu-view',
  templateUrl: './menu-view.component.html',
  styleUrls: ['./menu-view.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MenuViewComponent implements OnInit {


  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  menus: MatTableDataSource<Menu>;
  filterValue = '';
  result = '';
  loggedUserId: string;
  future = true;
  past = false;
  expandedElement: Menu | null;


  displayedColumns = ['diet','caloricVersion', 'menuDate'];
  constructor( private menuService: MenuService,
               private tokenStorageService: TokenStorageService) { }

  getData(){       
     this.menuService.getClientsMenus(this.loggedUserId).subscribe(menus => {
              this.menus = new MatTableDataSource(menus);
              this.menus.sort = this.sort;
              this.menus.paginator = this.paginator;
              this.menus.filter = this.filterValue.trim().toLowerCase();
              this.applyFilter(this.filterValue);
          });
      
    }
  
    ngOnInit() {
      this.loggedUserId = this.tokenStorageService.getUserId();
      this.getData();
    }
  
    applyFilter(filterValue: string) {
      this.filterValue = filterValue.trim().toLowerCase();
      this.menus.filter = this.filterValue;
      if (this.menus.paginator) {
        this.menus.paginator.firstPage();
      }
    }

}
