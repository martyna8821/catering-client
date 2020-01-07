import { Diet } from './Diet';
import { MenuEntryInput } from './MenuEntryInput';

export class MenuInput{

    menuDate: Date;
    diet: Diet;
    caloricVersion: string;
    menuEntries: MenuEntryInput[];
}