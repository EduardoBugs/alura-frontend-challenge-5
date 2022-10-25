import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardProdutoComponent } from '../card-produto/card-produto.component';

@NgModule({
    declarations: [
        CardProdutoComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [CardProdutoComponent]
})
export class CardProdutoModule { }
