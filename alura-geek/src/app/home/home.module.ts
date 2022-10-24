import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriaModule } from './components/categoria/categoria.module';
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
