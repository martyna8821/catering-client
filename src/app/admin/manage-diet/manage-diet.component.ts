import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-diet',
  templateUrl: './manage-diet.component.html',
  styleUrls: ['./manage-diet.component.css'],
  providers: [MessageService]
})
export class ManageDietComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
