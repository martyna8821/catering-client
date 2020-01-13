import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/service/RecipeService';
import { Recipe } from 'src/app/shared/model/Recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  displayedColumns = ['name', 'mealTypes', 'mealWeight', 
                      'caloricValue', 'details'];
 
  recipesDataSource: MatTableDataSource<Recipe>;
  filterValue = '';
  display=false;

  detailedRecipeName = '';

  detailedRecipeIngredients : string[] =[];
  detailedRecipeSteps: string[] = [];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private router: Router,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.recipeService.getAll().subscribe(
      r =>  {this.recipesDataSource = new MatTableDataSource<Recipe>(r);
            this.recipesDataSource.sort = this.sort;
            this.recipesDataSource.paginator = this.paginator;
            this.recipesDataSource.filter = this.filterValue.trim().toLowerCase();
            this.applyFilter(this.filterValue);}
    );
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();
    this.recipesDataSource.filter = this.filterValue;
    if (this.recipesDataSource.paginator) {
      this.recipesDataSource.paginator.firstPage();
    }
  }

  createNewRecipe(){
    this.router.navigateByUrl('/dietitian/add-recipe');
  }

  showRecipe(recipe: Recipe){
    
    this.detailedRecipeName = recipe.name;
    this.detailedRecipeIngredients = [];
    this.detailedRecipeSteps = [];

    recipe.ingredients.sort((i1,i2) => i2.value-i1.value);
    recipe.ingredients.forEach( i => {
      this.detailedRecipeIngredients.push(i.value.toString()+i.ingredient.unit+ ' '+ i.ingredient.name)
    });

    recipe.recipeSteps.sort((r1,r2) => r1.stepNumber - r2.stepNumber);
    recipe.recipeSteps.forEach(s => {
      this.detailedRecipeSteps.push(s.stepNumber.toString() + '. ' + s.description);
    });

    //this.detailedRecipeSteps.sort( (r1, r2) => r1.);
    this.display = true;
  }

}
