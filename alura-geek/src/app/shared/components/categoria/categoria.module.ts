import { NgxCurrencyModule } from 'ngx-currency';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardProdutoModule } from '../card-produto/card-produto.module';
import { CategoriaComponent } from './categoria.component';

@NgModule({
    declarations: [
        CategoriaComponent
    ],
    imports: [
        CommonModule,
        NgxCurrencyModule.forRoot({
          align: 'left',
          allowNegative: true,
          allowZero: true,
          decimal: ',',
          precision: 2,
          prefix: 'R$ ',
          suffix: '',
          thousands: '.',
          nullable: true,
        }),
        CardProdutoModule
    ],
    exports: [CategoriaComponent]
})
export class CategoriaModule { }
