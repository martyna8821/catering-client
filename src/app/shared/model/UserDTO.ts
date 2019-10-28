import { Address } from 'src/app/authentication/model/Address';

export class UserDTO{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
}