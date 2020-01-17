import { Recipe } from './Recipe';
import { MealTypeFilterPipe } from '../pipes/MealTypeFilter';
import { MealType } from './MealType';

export class MenuEntry{

    id: string;
    mealType: MealType;
    recipe: Recipe;
    amount: number;
    caloricValue: number;
}