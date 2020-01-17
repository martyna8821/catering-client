import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DietsListComponent } from './components/diets-list/diets-list.component';
import { DietsCardComponent } from './components/diets-card/diets-card.component';
import { PrimeModule } from './primeng/prime/prime.module';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatNativeDateModule } from '@angular/material';
import { MealTypeFilterPipe } from './pipes/MealTypeFilter';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    NavbarComponent,  
    DietsListComponent, 
    DietsCardComponent, 
    MealTypeFilterPipe,
    HomeComponent,
    UserDetailsComponent
  ],
  imports: [
    MaterialModule,
    PrimeModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    MatNativeDateModule

  ],
  exports: [
    CommonModule,
    MaterialModule,
    PrimeModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    DietsListComponent,
    DietsCardComponent,
    NgxMatSelectSearchModule,
    MatNativeDateModule,
    MealTypeFilterPipe,
    HomeComponent,
    UserDetailsComponent
    ]
})
export class SharedModule { }
