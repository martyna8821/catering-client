import { Component, OnInit, Input } from '@angular/core';
import { Diet } from '../model/Diet';
import { TokenStorageService } from 'src/app/authentication/service/token-storage.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { DietService } from '../service/DietService';


@Component({
  selector: 'app-diets-card',
  templateUrl: './diets-card.component.html',
  styleUrls: ['./diets-card.component.css'],
  providers: [ConfirmationService]
})
export class DietsCardComponent implements OnInit {


  panelOpenState = false;
  @Input() adminView: boolean;
  image: Blob;

  showDialog = false;
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router,
              private confirmationService: ConfirmationService,
              private dietService: DietService) { }

  ngOnInit() {
  }

  @Input() diet: Diet;


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

}
