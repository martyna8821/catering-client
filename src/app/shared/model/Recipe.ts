import { RecipeIngredient } from './RecipeIngredient';
import { RecipeStep } from './RecipeStep';
import { MealType } from './MealType';

export class Recipe{
    id: string;
    name: string; 
    ingredients: RecipeIngredient[];
    recipeSteps: RecipeStep[];
    mealWeight: number;
    caloricValue: number;
    mealTypes: MealType[];
}