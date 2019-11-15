import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Diet } from 'src/app/shared/model/Diet';
import { DietService } from 'src/app/shared/service/DietService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-diet',
  templateUrl: './create-diet.component.html',
  styleUrls: ['./create-diet.component.css']
})
export class CreateDietComponent implements OnInit {

  isLinear = false;
  basicDietInfo: FormGroup;
  dietDetails: FormGroup;
  dietToCreate: Diet = {name: '', description: '', price: 100, labels: [], forbiddenIngredients:[], caloricVersions:[], published: false,
id: '', dietitianUsername: ''};

  constructor(private _formBuilder: FormBuilder,
              private router: Router,
              private dietService:DietService) 
              { }

  ngOnInit() {
    this.basicDietInfo = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [100, Validators.required]
    });
    this.dietDetails = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  createDiet(){
      // this.dietService.add(this.dietToCreate).subscribe(
      //     res => console.log("succ"),
      //     err => console.log("err")
      // );
      this.router.navigate(['']);
  }

}
