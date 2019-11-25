import { SafeUrl } from '@angular/platform-browser';

export class Diet{

    id: string;
    name: string;
    description: string;
    price: number;
    published: boolean;
    caloricVersions: string[];  
    forbiddenIngredients: string[];
    labels: string[];
    dietitianUsername: string;
    image: string;
    imageUrl: SafeUrl;
}