import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from '../shared/shared.module';
import { DietitianRoutingModule } from './dietitian-routing.module';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';



@NgModule({
  declarations: [RecipeListComponent, AddRecipeComponent, CreateMenuComponent],
  imports: [
    DietitianRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class DietitianModule { }
