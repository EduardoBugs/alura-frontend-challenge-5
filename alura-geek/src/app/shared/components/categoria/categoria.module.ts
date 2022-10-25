import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaProdutoComponent } from './categoria-produto/categoria-produto.component';
import { CategoriaComponent } from './categoria.component';
import { NgxCurrencyModule } from 'ngx-currency';

@NgModule({
    declarations: [
        CategoriaComponent,
        CategoriaProdutoComponent
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
    ],
    exports: [CategoriaComponent]
})
export class CategoriaModule { }
