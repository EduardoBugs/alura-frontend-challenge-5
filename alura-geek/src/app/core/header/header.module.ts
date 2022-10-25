import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BtnActionComponent } from './btn-action/btn-action.component';
import { HeaderComponent } from './header.component';
import { SearchBarModule } from './search-bar/search-bar.module';

@NgModule({
  declarations: [
    HeaderComponent,
    BtnActionComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
