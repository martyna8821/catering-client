import { Ingredient } from './Ingredient';

export class RecipeInput{
    name: string;
    mealTypes: string[];
    ingredients: Ingredient[];
    recipeSteps: string[];
    labels: string[];   
    mealWeight: number;
}