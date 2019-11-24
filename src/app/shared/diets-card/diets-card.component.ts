import { Component, OnInit, Input } from '@angular/core';
import { Diet } from '../model/Diet';

@Component({
  selector: 'app-diets-card',
  templateUrl: './diets-card.component.html',
  styleUrls: ['./diets-card.component.css']
})
export class DietsCardComponent implements OnInit {


  panelOpenState = false;
  image: Blob;
  constructor() { }

  ngOnInit() {
  }

  @Input() diet: Diet;

}
