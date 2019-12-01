import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';

const dietitianRoutes: Routes = [
    { path: 'recipe-list', component: RecipeListComponent},
    { path: 'add-recipe', component: AddRecipeComponent}
  ];

@NgModule({
  imports: [ RouterModule.forChild(dietitianRoutes) ],
  exports: [ RouterModule ]
})
export class DietitianRoutingModule {}