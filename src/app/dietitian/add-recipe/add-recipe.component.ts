import { Component, OnInit } from '@angular/core';
import { RecipeInput } from 'src/app/shared/model/RecipeInput';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';
import { MealType } from './Mealtype';
import { RecipeIngredient } from '../../shared/model/RecipeIngredient';
import { Ingredient } from 'src/app/shared/model/Ingredient';
import { IngredientService } from 'src/app/shared/service/IngredientService';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { RecipeStep } from '../../shared/model/RecipeStep';
import { LabelInput } from 'src/app/authentication/model/LabelInput';
import { RecipeService } from 'src/app/shared/service/RecipeService';
import { Router } from '@angular/router';


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

  mealTypes: MealType[] = [{ name: 'śniadanie', chosen: false}, {name: 'lunch', chosen:false},
  { name: 'obiad', chosen: false}, {name: 'podwieczorek', chosen: false}, 
  {name: 'kolacja', chosen: false}];
 
  recipeToCreate: RecipeInput = {name: '', labels: [], mealTypes: [],
                        mealWeight: 0, ingredients: [], recipeSteps:[]};

  recipeIngredients: RecipeIngredient[] = [{ingredient:{name: 'jajka', unit: 'g', id: ''}, value:0}];
  ingredientsCounter = 1;
  ingredients: Ingredient[] = [];

  myControl = new FormControl();
  filteredIngredients: Observable<Ingredient[]>;

  recipeStepsCounter = 1;
  recipeSteps: RecipeStep[] = [{description: '', stepNumber: this.recipeStepsCounter}];

  labels: LabelInput[] = [{name: "wegetariańska", checked: false}, 
                          {name: "wegańska", checked : false}, 
                          {name: "bezglutenowa", checked: false},
                          {name: "bez laktozy", checked: false}];
  constructor(private ingredientService: IngredientService,
              private recipeService: RecipeService,
              private router: Router) { }
  
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
    const filterValue = value;

    return this.ingredients.filter(ingredient => ingredient.name.toLowerCase().includes(filterValue));
  }
  addIngredient() {
    this.ingredientsCounter++;
      this.recipeIngredients.push({ingredient: new Ingredient(), value: 0});
  }

  removeIngredient() {
    this.ingredientsCounter--;
      this.recipeIngredients.splice(-1, 1);
  }


    ingredientSelected(i: number, ingredient: Ingredient){
     console.log(ingredient);
      this.recipeIngredients[i].ingredient = ingredient;
    }

    displayFn(ingredient?: Ingredient): string | undefined {
      return ingredient ? ingredient.name : undefined;
  }

  addRecipeStep(){
    this.recipeStepsCounter++;
    this.recipeSteps.push({description: '', stepNumber: this.recipeStepsCounter});
  }

  removeRecipeStep(){
    this.recipeStepsCounter--;
    this.recipeSteps.splice(-1,1);
  }

  save(){
    this.mealTypes.forEach( type => { 
          if(type.chosen){
              this.recipeToCreate.mealTypes.push(type.name);
    }});
   
    this.recipeToCreate.ingredients = this.recipeIngredients;
    
    this.recipeToCreate.recipeSteps = this.recipeSteps;
    
    this.labels.forEach( label => {
                  if(label.checked){
                    this.recipeToCreate.labels.push(label.name);
                  }
    });

    console.log(this.recipeToCreate);
    this.recipeService.add(this.recipeToCreate).subscribe(
      succ => this.router.navigateByUrl('/dietitian/recipe-list')
    );
  }

}
