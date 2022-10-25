import { NgxCurrencyModule } from 'ngx-currency';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CardProdutoModule } from '../shared/components/card-produto/card-produto.module';
import { CategoriaModule } from '../shared/components/categoria/categoria.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgxDropzoneModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
    CategoriaModule,
    CardProdutoModule,
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
    })
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
})
export class ProductsModule {}
