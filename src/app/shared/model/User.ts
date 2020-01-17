import { Address } from 'src/app/security/model/Address';

export class User{

    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
    roles: string[];
}