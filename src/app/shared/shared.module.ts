import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    HttpClientModule, 
    FormsModule
  ]
})
export class SharedModule { }
