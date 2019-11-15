export class Diet{

    id: string;
    name: string;
    description: string;
    price: number;
    published: boolean;
    caloricVersions: number[];  
    forbiddenIngredients: string[];
    labels: string[];
    dietitianUsername: string;
}