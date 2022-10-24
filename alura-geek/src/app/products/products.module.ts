import { NgModule } from '@angular/core';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products.routing.module';
import { NgxCurrencyModule } from 'ngx-currency';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgxDropzoneModule,
    FontAwesomeModule,
    ToastrModule.forRoot(),
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
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent,
  ],
})
export class ProductsModule {}
