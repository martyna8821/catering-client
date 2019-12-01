import { Ingredient } from './Ingredient';

export class Recipe{
    id: string;
    name: string;
    mealTypes: string[];
    ingredients: Ingredient[];
    recipeSteps: string[];
    labels: string[];   
    mealWeight: number;
    caloricValue: number;
}