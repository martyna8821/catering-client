import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/shared/model/Menu';
import { MenuEntry } from 'src/app/shared/model/MenuEntry';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {


  @Input()  menu: Menu;

  constructor() { }

  ngOnInit() {
    this.menu.menuEntries = this.menu.menuEntries.sort( 
      (entry1, entry2) => {
        return entry1.mealType.orderNumber > entry2.mealType.orderNumber? 
                          1 :  -1;
      });
  }

}
