import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../core/home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';

const dietitianRoutes: Routes = [
    { path: 'recipe-list', component: RecipeListComponent},
    { path: 'add-recipe', component: AddRecipeComponent},
    { path: 'create-menu', component: CreateMenuComponent}
  ];

@NgModule({
  imports: [ RouterModule.forChild(dietitianRoutes) ],
  exports: [ RouterModule ]
})
export class DietitianRoutingModule {}