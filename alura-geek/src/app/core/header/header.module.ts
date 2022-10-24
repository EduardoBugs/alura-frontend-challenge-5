import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BtnActionComponent } from './btn-action/btn-action.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    BtnActionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
