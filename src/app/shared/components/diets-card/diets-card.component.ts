import { Component, OnInit, Input } from '@angular/core';
import { Diet } from '../../model/Diet';
import { TokenStorageService } from 'src/app/security/service/token-storage.service';
import { Router, NavigationEnd } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DietService } from '../../service/DietService';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-diets-card',
  templateUrl: './diets-card.component.html',
  styleUrls: ['./diets-card.component.css'],
  providers: [ConfirmationService]
})
export class DietsCardComponent implements OnInit {


  panelOpenState = false;
  @Input() adminView: boolean;


  showDialog = false;
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private dietService: DietService,
              private snackBar: MatSnackBar,
              private route: Router) { }

  ngOnInit() {

  this.router.routeReuseStrategy.shouldReuseRoute = function () {

    return false;
  
  };
  
  this.mySubscription = this.router.events.subscribe((event) => {
  
    if (event instanceof NavigationEnd) {
  
      // Trick the Router into believing it's last link wasn't previously loaded
  
      this.router.navigated = false;
  
    }
  
  });
  }


  mySubscription: any;

  @Input() diet: Diet;

  newCaloricVersion = 0;

  delete(dietId: string){
    this.confirmationService.confirm({
      message: 'Czy na pewno chesz usunąć wybraną dietę?',
      accept: () => {
        this.dietService.deleteById(dietId).subscribe();
      }
  });
  }

  changeStatus(){
   this.dietService.changeStatus(!(this.diet.published), this.diet.id).subscribe(
     succ=> this.diet.published = !this.diet.published,
     err=> this.diet.published = !this.diet.published
   );
  }

  addNewCaloricVersion(){
    console.log(this.newCaloricVersion);
      if(this.diet.caloricVersions.includes(this.newCaloricVersion.toString())){
         this.snackBar.open('Wybrana dieta posiada już tą wersję kaloryczną.', '', {
           duration: 3000
         }) 
      }
      else{ 
        this.dietService.addNewCaloricVersion(this.newCaloricVersion.toString(), this.diet.id).subscribe(
            diet => this.diet = diet,
            err =>        this.snackBar.open('Nie udało się dodać nowej wersji.', '', {
              duration: 3000
            }) 
        );
      }
  }

}
