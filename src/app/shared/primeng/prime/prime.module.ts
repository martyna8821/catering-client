import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {ListboxModule} from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule,
    ListboxModule,
    ToastModule
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule,
    ListboxModule,
    ToastModule
  ]
})
export class PrimeModule { }
