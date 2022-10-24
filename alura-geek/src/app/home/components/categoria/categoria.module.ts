import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardProdutoModule } from 'src/app/shared/components/card-produto/card-produto.module';
import { CategoriaProdutoComponent } from './categoria-produto/categoria-produto.component';
import { CategoriaComponent } from './categoria.component';

@NgModule({
    declarations: [
        CategoriaComponent,
        CategoriaProdutoComponent
    ],
    imports: [
        CommonModule,
        CardProdutoModule
    ],
    exports: [CategoriaComponent]
})
export class CategoriaModule { }
