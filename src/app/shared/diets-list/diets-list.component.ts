import { Component, OnInit, Input } from '@angular/core';
import { Diet } from '../model/Diet';
import { DietService } from '../service/DietService';

@Component({
  selector: 'app-diets-list',
  templateUrl: './diets-list.component.html',
  styleUrls: ['./diets-list.component.css']
})
export class DietsListComponent implements OnInit {

  constructor(private dietService: DietService) { }

  ngOnInit() {
    this.dietService.getAll().subscribe( d =>
      this.diets = d
    );
  }

  @Input() adminView: boolean;
  diets: Diet[];

}
