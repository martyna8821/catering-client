import { Ingredient } from './Ingredient';
import { RecipeIngredient } from 'src/app/shared/model/RecipeIngredient';
import { RecipeStep } from './RecipeStep';

export class RecipeInput{
    name: string;
    mealTypes: string[];
    ingredients: RecipeIngredient[];
    recipeSteps: RecipeStep[];

    mealWeight: number;
}