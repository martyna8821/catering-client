import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../model/Recipe';

@Pipe({name: 'mealTypeFilter'})
export class MealTypeFilterPipe implements PipeTransform {
  transform(recipes: any[], mealType?: string): any[] {
    var filteredRecipes: Recipe[] = [];

    recipes.forEach(r => {
      r.mealTypes.forEach( type =>{
        if(type.name === mealType)
          filteredRecipes.push(r);
      })
    })
    return filteredRecipes;
  }
}