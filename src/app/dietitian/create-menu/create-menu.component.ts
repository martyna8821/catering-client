import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { Diet } from 'src/app/shared/model/Diet';
import { DietService } from 'src/app/shared/service/DietService';
import { TokenStorageService } from 'src/app/security/service/token-storage.service';
import { map, tap } from 'rxjs/operators';
import { Menu } from 'src/app/shared/model/Menu';
import { MenuInput } from 'src/app/shared/model/MenuInput';
import { MenuEntryInput } from 'src/app/shared/model/MenuEntryInput';
import { RecipeService } from 'src/app/shared/service/RecipeService';
import { Recipe } from 'src/app/shared/model/Recipe';
import { MenuService } from 'src/app/shared/service/MenuService';
import { MatSnackBar } from '@angular/material';
import { MenuEntry } from 'src/app/shared/model/MenuEntry';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent implements OnInit {
  
  diets: Diet[];
  recipes: Recipe[];
  minDate = new Date();
  menuCaloricValue = 0;
  dietsAvailable: boolean;
  dietsRetrieved = false;

  createdMenus: Menu[] = [];

  menuToCreate: MenuInput = {menuDate: this.minDate, diet: new Diet(), caloricVersion: '',
    menuEntries: [{mealType: 'śniadanie', recipe: null, amount: 0, caloricValue: 0},
    {mealType: 'drugie śniadanie', recipe: null, amount: 0, caloricValue: 0},
    {mealType: 'obiad', recipe: null, amount: 0, caloricValue: 0},
    {mealType: 'podwieczorek', recipe: null, amount: 0, caloricValue: 0},
    {mealType: 'kolacja', recipe: null, amount: 0, caloricValue: 0}]};

  constructor(private dietService: DietService,
              private tokenStorageService: TokenStorageService,
              private recipeService: RecipeService,
              private menuService: MenuService,
              private snackBar: MatSnackBar,
              private router: Router) { }


  ngOnInit() {
    this.recipeService.getAll().subscribe( r => this.recipes = r);
    var dateTmp =  new Date(Date.now());
    this.minDate.setDate(dateTmp.getDate()+1);

    var loggedUser = this.tokenStorageService.getUserName();
    this.dietService.getAll().pipe(
      map( diets => { this.diets = diets;
        this.dietsRetrieved = true;
         this.diets = diets.filter(diet => diet.dietitianUsername === loggedUser)
       }),
       tap(td => this.dietsAvailable = this.diets.length > 0? true : false)
     )
     .subscribe();
     
    
  }

  retrieveCreatedMenus(){
    this.menuService.getAll().pipe(
      map( menus => {
          this.createdMenus = menus.filter( menu =>
                 menu.diet.id === this.menuToCreate.diet.id)
      })
    ).subscribe();
  }

  addMenu(){
    if(this.menuCaloricValue >  (Number(this.menuToCreate.caloricVersion)+100)){
      this.snackBar.open('Za duża liczba kalorii.', '',{
        duration: 3000,
      });

    }else if (this.menuCaloricValue <  (Number(this.menuToCreate.caloricVersion)-100)){
      this.snackBar.open('Za mała liczba kalorii.', '',{
        duration: 3000,
      });

    }else if(!this.checkIfAllChosen()){
      this.snackBar.open('Uzupełnij wszystkie posiłki.', '',{
        duration: 3000,
      });

    }else{ 
       this.menuService.add(this.menuToCreate).subscribe(
         success => this.router.navigateByUrl('/home'),
         error => this.snackBar.open('Dodanie menu nie powiodło się!','',{
              duration: 3000})
       );
    }    
  }

  calculateEntryCalories(menuEntry, event){

   if(event.source)
     menuEntry.caloricValue = event.source.value.caloricValue*menuEntry.amount/100;
   else if(menuEntry.recipe)
     menuEntry.caloricValue = menuEntry.recipe.caloricValue*menuEntry.amount/100;
 
    this.calculateMenuCaloricValue();
  }

  calculateMenuCaloricValue(){
    this.menuCaloricValue = 0;
    this.menuToCreate.menuEntries.forEach(menuEntry=>{
      this.menuCaloricValue += menuEntry.caloricValue;
    });
  }

  checkIfAllChosen(): boolean{

    var allChoosen = true;
    this.menuToCreate.menuEntries.forEach(menuEntry =>{
      if( !menuEntry.recipe || menuEntry.amount===0)
        allChoosen = false;
    });

    return allChoosen;
  }

  filterCreated = (date: Date): boolean => {
    var canCreate = true;
    var dateString = date.getFullYear() + '-';
    if(date.getMonth()<9)
      dateString +='0'+(date.getUTCMonth()+1) + '-' + date.getDate();
    else
      dateString +=(date.getUTCMonth()+1) + '-' + date.getDate();
    
    this.createdMenus.forEach(menu => {
      
      if (menu.menuDate.toString() === dateString)
      canCreate = false;
    })
    // Prevent Saturday and Sunday from being selected.
    return canCreate;
  }
}
