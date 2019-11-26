import { Diet } from './Diet';
import { Address } from 'cluster';
import { User } from './User';

export class Order{

    id: string;
    diet: Diet;
    caloricVersion: string;
    startDate: Date;
    endDate: Date;
    deliveryAddress: Address;
    client: User;
    orderDate: Date;
}