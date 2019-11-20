import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';

@NgModule({
  declarations: [],
  imports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule
  ]
})
export class PrimeModule { }
