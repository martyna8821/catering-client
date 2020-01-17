import { Address } from './Address';

export class RegisterRequest{
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
    roles: string[];
}