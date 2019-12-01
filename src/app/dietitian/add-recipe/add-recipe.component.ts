import { Component, OnInit } from '@angular/core';
import { RecipeInput } from 'src/app/shared/model/RecipeInput';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import { MealType } from './Mealtype';
import { RecipeIngredient } from './RecipeIngredient';
import { Ingredient } from 'src/app/shared/model/Ingredient';
import { IngredientService } from 'src/app/shared/service/IngredientService';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
  animations: [
    trigger('animation', [
        state('visible', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('void => *', [
            style({transform: 'translateX(50%)', opacity: 0}),
            animate('300ms ease-out')
        ]),
        transition('* => void', [
            animate(('250ms ease-in'), style({
                height: 0,
                opacity: 0,
                transform: 'translateX(50%)'
            }))
        ])
    ])
]
})
export class AddRecipeComponent implements OnInit {

  availableMealTypes: MealType[] = [{ name: 'śniadanie', chosen: false}, {name: 'lunch', chosen:false},
  { name: 'obiad', chosen: false}, {name: 'podwieczorek', chosen: false}, 
  {name: 'kolacja', chosen: false}];
 
  recipeToCreate: RecipeInput = new RecipeInput();
  //{ name:'',
  //                                mealTypes: [],
  //                                ingredients: [],
  //                                recipeSteps: [],
  //                                labels: [],   
  //                                mealWeight: 0};
//

  columns: number[];
  recipeIngredients: RecipeIngredient[] = [{ingredient: new Ingredient(), quantity: 0}];
  ingredientsCounter = 1;
  ingredients: Ingredient[] = [];

  myControl = new FormControl();
  filteredIngredients: Observable<Ingredient[]>;


  constructor(private ingredientService: IngredientService) { }
  
  ngOnInit() {
    this.ingredientService.getAll().subscribe(
      ingredients => this.ingredients =ingredients
    );

    this.filteredIngredients = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): Ingredient[] {
    const filterValue = value.toLowerCase();

    return this.ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(filterValue));
  }
  addIngredient() {
    this.ingredientsCounter++;
      this.recipeIngredients.push({ingredient: new Ingredient(), quantity: 0});
  }

  removeIngredient() {
    this.ingredientsCounter--;
      this.recipeIngredients.splice(-1, 1);
  }

}
