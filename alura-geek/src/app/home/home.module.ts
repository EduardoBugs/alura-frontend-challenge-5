import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardProdutoModule } from 'src/app/shared/components/card-produto/card-produto.module';

@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        GaleriaComponent
    ],
    imports: [
        CommonModule,
        CardProdutoModule
    ],
    exports: [HomeComponent]
})
export class HomeModule { }
