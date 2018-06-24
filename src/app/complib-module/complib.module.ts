import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxImgModule} from 'ngx-img';
import {ImageUploadPopupComponent} from './components/image-upload/image-upload-popup.component';
import {ModalModule} from 'ngx-bootstrap';
import {LaddaModule} from 'angular2-ladda';


@NgModule({
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    LaddaModule,
    NgxImgModule.forRoot()],
  exports: [ImageUploadPopupComponent],
  declarations: [
    ImageUploadPopupComponent
  ],
  providers: [],
})
export class ComplibModule {
}
