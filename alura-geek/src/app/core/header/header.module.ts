import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
