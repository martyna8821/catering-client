import { RecipeIngredient } from './RecipeIngredient';
import { RecipeStep } from './RecipeStep';

export class Recipe{
    id: string;
    name: string;
    mealTypes: string[];
    ingredients: RecipeIngredient[];
    recipeSteps: RecipeStep[];
    labels: string[];   
    mealWeight: number;
    caloricValue: number;
}