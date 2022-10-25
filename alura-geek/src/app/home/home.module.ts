import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriaModule } from '../shared/components/categoria/categoria.module';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        CategoriaModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
