import { Diet } from './Diet';
import { User } from './User';
import { Address } from 'src/app/authentication/model/Address';

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