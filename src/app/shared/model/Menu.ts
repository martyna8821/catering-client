import { Diet } from './Diet';
import { MenuEntry } from './MenuEntry';

export class Menu{
    id: string;
    menuDate: Date;
    diet: Diet;
    caloricVersion: string;
    menuEntries: MenuEntry[];
}