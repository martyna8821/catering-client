import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/model/Recipe';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  displayedColumns = ['name', 'mealTypes', 'mealWeight', 
                      'caloricValue', 'labels'];
 
  recipesDataSource: MatTableDataSource<Recipe>;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  createNewRecipe(){
    this.router.navigateByUrl('/dietitian/add-recipe');
  }

}
