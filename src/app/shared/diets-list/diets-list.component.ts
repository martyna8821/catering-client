import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diets-list',
  templateUrl: './diets-list.component.html',
  styleUrls: ['./diets-list.component.css']
})
export class DietsListComponent implements OnInit {




  constructor() { }

  ngOnInit() {
  }

  @Input() adminView: boolean;

}
