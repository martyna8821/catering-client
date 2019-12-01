import { Component, OnInit } from '@angular/core';
import { RecipeInput } from 'src/app/shared/model/RecipeInput';
import {trigger,state,style,transition,animate,AnimationEvent} from '@angular/animations';

class MealType{
  name: string;
  chosen: boolean;
}
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
  constructor() { }
  columns: number[];

  ngOnInit() {
      this.columns = [0, 1, 2, 3, 4, 5];
  }

  addColumn() {
      this.columns.push(this.columns.length);
  }

  removeColumn() {
      this.columns.splice(-1, 1);
  }

}
