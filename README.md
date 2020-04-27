# Catering app client

Client application of a system supporting catering company work. Allows to create menus for diets, place orders, generate reports, administrate users and available recipes. Backend application can be found in following [repository](https://github.com/martyna8821/catering-app)

## Features

* Authorization with RouteGuards 

* Three user categories - each represented by separate module:
    * administrator
    * client
    * dietitian   

* Custom pipe for filtering recipes, example useage:
```
 let recipe of recipes | mealTypeFilter : menuEntry.mealType
```


## Technologies 
* Angular 8
* TypeScript
* Angular Material
* PrimeNG 