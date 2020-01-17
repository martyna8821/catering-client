import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../security/service/token-storage.service';
import { DietService } from '../../shared/service/DietService';
import { Diet } from '../../shared/model/Diet';
import { DomSanitizer } from '@angular/platform-browser';
import { map } from 'rxjs/operators';

export class DietImageUrl{
  diet: Diet;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tokenService: TokenStorageService,
    private sanitizer: DomSanitizer,
              private dietService: DietService) { 
                this.responsiveOptions = [
                  {
                      breakpoint: '1024px',
                      numVisible: 3,
                      numScroll: 3
                  },
                  {
                      breakpoint: '768px',
                      numVisible: 2,
                      numScroll: 2
                  },
                  {
                      breakpoint: '560px',
                      numVisible: 1,
                      numScroll: 1
                  }
                ];
              }

  cars: string[] = ["carA", "carB", "carC"];
  diets: Diet[];
  dietsImages: DietImageUrl[];

  responsiveOptions;

  ngOnInit() {
  
    this.dietService.getAll().pipe(
      map( d => { this.diets = d;
        this.diets = d.filter(diet => diet.published)
      })).subscribe();
  }

}
