import { Component, OnInit } from '@angular/core';
import { Diet } from 'src/app/shared/model/Diet';
import { DietService } from 'src/app/shared/service/DietService';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';
import { map } from 'rxjs/operators';
import { Menu } from 'src/app/shared/model/Menu';
import { MenuInput } from 'src/app/shared/model/MenuInput';
import { MenuEntryInput } from 'src/app/shared/model/MenuEntryInput';
import { RecipeService } from 'src/app/shared/service/RecipeService';
import { Recipe } from 'src/app/shared/model/Recipe';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  
  diets: Diet[];
  recipes: Recipe[];
  menuToCreate: MenuInput = {menuDate: new Date(), diet: new Diet(), caloricVersion: '',
    menuEntries: [{mealType: 'śniadanie', recipe: null, amount: 0},
    {mealType: 'drugie śniadanie', recipe: null, amount: 0},
    {mealType: 'obiad', recipe: null, amount: 0},
    {mealType: 'podwieczorek', recipe: null, amount: 0},
    {mealType: 'kolacja', recipe: null, amount: 0}]};

  constructor(private dietService: DietService,
              private tokenStorageService: TokenStorageService,
              private recipeService: RecipeService) { }

  ngOnInit() {
    var loggedUser = this.tokenStorageService.getUserName();
    this.dietService.getAll().pipe(
      map( diets => { this.diets = diets;
         this.diets = diets.filter(diet => diet.dietitianUsername === loggedUser)
       })
     )
     .subscribe();
     this.recipeService.getAll().subscribe( r => this.recipes = r);

  }


  sayHi(){
    console.log(this.menuToCreate);
  }

}
