import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/shared/model/Diet';
import { DietService } from 'src/app/shared/service/DietService';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';
import { map } from 'rxjs/operators';
import { Menu } from 'src/app/shared/model/Menu';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {

  menuDiet: Diet;
  diets: Diet[];
  menu: Menu = {date: null};

  constructor(private dietService: DietService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit() {

    var loggedUser = this.tokenStorageService.getUserName();
    this.dietService.getAll().pipe(
      map( diets => { this.diets = diets;
         this.diets = diets.filter(diet => diet.dietitianUsername === loggedUser)
       })
     )
     .subscribe();

  }

}
