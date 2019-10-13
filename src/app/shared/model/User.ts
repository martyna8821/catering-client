import { Address } from 'src/app/authentication/model/Address';

export class User{

    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
    roles: string[];
}