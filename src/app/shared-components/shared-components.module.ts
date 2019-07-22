import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { Location } from '@angular/common';
@NgModule({
  declarations: [LoaderComponent, BackButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    LoaderComponent,
    BackButtonComponent
  ],
  providers: [Location]
})
export class SharedComponentsModule { }
