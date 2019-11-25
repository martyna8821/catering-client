import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/app/shared/service/DietService';
import { Diet } from 'src/app/shared/model/Diet';
import { MatRadioChange } from '@angular/material';
import { OrderInput } from 'src/app/shared/model/OrderInput';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  diets: Diet[];
  chosenDiet: Diet= new Diet();

  minDate = Date.now;
  startDate = new FormControl(new Date());
  endDate = new FormControl(new Date());

  orderToCreate: OrderInput = {diet: new Diet(), caloricVersion: '', startDate: null,
                                endDate: null};
  constructor(private dietService: DietService) { }

  ngOnInit() {
    this.dietService.getAll().subscribe( d => this.diets = d);
  }



}
