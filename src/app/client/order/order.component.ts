import { Component, OnInit, Input } from '@angular/core';
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
import { Time } from '@angular/common';
import { map, min } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  diets: Diet[];
  chosenDiet: Diet= new Diet();

  minStartDate = new Date();

  hours: string[] = [];
  minutes: string[] = ['00', '15', '30', '45'];
  deliveryHours = '05';
  deliveryMinutes = '00';


  startDate =new Date();
  endDate =new Date();
  deliverToHome:boolean = false;
  insertedDeliveryAddress: Address  =  new Address();
  client: User;

  orderToCreate: OrderInput = {diet: new Diet(), caloricVersion: '', startDate: this.minStartDate,
                                endDate: this.minStartDate, deliveryAddress: {city: '', street: '',
                              zipCode: '', houseNumber: ''}, client: null, deliveryTime: '', price: 0};
  constructor(private dietService: DietService,
              private userService: UserService,
              private tokenStorageService: TokenStorageService,
              private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
    var dateTmp =  new Date(Date.now());
    this.minStartDate.setDate(dateTmp.getDate()+1);
    this.startDate = this.minStartDate;
    this.endDate = this.minStartDate;

    for (let i = 5; i < 22; i++) {
      if(i < 10)
        this.hours.push('0'+i.toString());
      else
        this.hours.push(i.toString());  
    }
    this.dietService.getAll().pipe(
      map( d => { this.diets = d;
        this.diets = d.filter(diet => diet.published)
      })).subscribe();
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

   // var t: Time = {hours: 5, minutes: 0};
    this.orderToCreate.deliveryTime = this.deliveryHours+':'+this.deliveryMinutes;
      this.orderToCreate.diet = this.chosenDiet;
        this.orderService.add(this.orderToCreate).subscribe(
          succ => this.router.navigateByUrl("/home"),
          err => console.log("error creating order")
        );
  }

  selectionChange(event){
    if(event.selectedIndex ===3){
      this.calculatePrice();
    }
  }

  calculatePrice(){
    var delta = (this.orderToCreate.endDate.getTime() - 
                            this.orderToCreate.startDate.getTime() ) 
                        / (1000 * 3600 * 24);
    this.orderToCreate.price = this.chosenDiet.price * (Math.floor(delta)+1); 
  }
}
