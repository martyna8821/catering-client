import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {FileUploadModule} from 'primeng/fileupload';
import {ListboxModule} from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@NgModule({
  declarations: [],
  imports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule,
    ListboxModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    
  ],
  exports: [
    CarouselModule,
    ButtonModule,
    FileUploadModule,
    ListboxModule,
    ToastModule,
    DialogModule,
    ConfirmDialogModule,
    
  ]
})
export class PrimeModule { }
