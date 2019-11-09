import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { DietsListComponent } from './diets-list/diets-list.component';
import { DietsCardComponent } from './diets-card/diets-card.component';

@NgModule({
  declarations: [NavbarComponent, ConfirmationComponent, DietsListComponent, DietsCardComponent],
  imports: [
    MaterialModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    CommonModule,
    MaterialModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    DietsListComponent,
    DietsCardComponent
    ]
})
export class SharedModule { }
