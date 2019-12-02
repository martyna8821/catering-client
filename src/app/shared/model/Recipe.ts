import { Ingredient } from './Ingredient';
import { RecipeIngredient } from './RecipeIngredient';

export class Recipe{
    id: string;
    name: string;
    mealTypes: string[];
    ingredients: RecipeIngredient[];
    recipeSteps: string[];
    labels: string[];   
    mealWeight: number;
    caloricValue: number;
}