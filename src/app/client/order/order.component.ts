import { Component, OnInit } from '@angular/core';
import { DietService } from 'src/app/shared/service/DietService';
import { Diet } from 'src/app/shared/model/Diet';
import { MatRadioChange } from '@angular/material';
import { OrderInput } from 'src/app/shared/model/OrderInput';
import { FormControl } from '@angular/forms';
import { Address } from 'src/app/authentication/model/Address';
import { User } from 'src/app/shared/model/User';
import { UserService } from 'src/app/shared/service/UserService';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';
import { OrderService } from 'src/app/shared/service/OrderService';
import { Router } from '@angular/router';

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
  deliverToHome:boolean = false;
  insertedDeliveryAddress: Address  =  new Address();
  client: User;
  
  personalData = false;

  regulations = false;

  orderToCreate: OrderInput = {diet: new Diet(), caloricVersion: '', startDate: null,
                                endDate: null, deliveryAddress: {city: '', street: '',
                              zipCode: '', houseNumber: ''}, client: null};
  constructor(private dietService: DietService,
              private userService: UserService,
              private tokenStorageService: TokenStorageService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    this.dietService.getAll().subscribe( d => this.diets = d);
    this.userService.getUserByUsername( 
                  this.tokenStorageService.getUserName())
                  .subscribe( user =>
                  this.orderToCreate.client = user
                  );
  }

  deliverHomeChange(){
    if(this.deliverToHome){
      this.orderToCreate.deliveryAddress = this.orderToCreate.client.address;
    }
    else{
      this.orderToCreate.deliveryAddress = this.insertedDeliveryAddress;
    }
  }

  placeOrder(){

    if(this.personalData && this.regulations){
      this.orderToCreate.diet = this.chosenDiet;
        this.orderService.add(this.orderToCreate).subscribe(
          succ => this.router.navigateByUrl("/home"),
          err => console.log("error creating order")
        );
    }
  }
}
