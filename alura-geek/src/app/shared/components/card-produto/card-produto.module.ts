import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardProdutoComponent } from '../card-produto/card-produto.component';

@NgModule({
    declarations: [
        CardProdutoComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [CardProdutoComponent]
})
export class CardProdutoModule { }
