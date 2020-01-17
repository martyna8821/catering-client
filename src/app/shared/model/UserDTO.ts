import { Address } from 'src/app/security/model/Address';

export class UserDTO{
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: Address;
}