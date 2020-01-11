import { Component, OnInit, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/shared/model/Recipe';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/shared/service/RecipeService';

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
    this.detailedRecipeIngredients = [];
    this.detailedRecipeSteps = [];
    recipe.ingredients.forEach( i => {
      this.detailedRecipeIngredients.push(i.value.toString()+i.ingredient.unit+ ' '+ i.ingredient.name)
    });

    recipe.recipeSteps.forEach(s => {
      this.detailedRecipeSteps.push(s.stepNumber.toString() + '. ' + s.description);
    });

    this.detailedRecipeSteps.reverse();
    this.display = true;
  }

}
