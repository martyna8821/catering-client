import { Diet } from './Diet';
import { Address } from 'src/app/authentication/model/Address';
import { User } from './User';
import { Time } from '@angular/common';

export class OrderInput{

    diet: Diet;
    caloricVersion: string;
    startDate: Date;
    endDate: Date;
    deliveryAddress: Address;
    client: User;
    deliveryTime: string;
    price: number;
}