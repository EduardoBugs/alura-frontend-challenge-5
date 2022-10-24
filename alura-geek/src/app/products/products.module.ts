import { NgModule } from "@angular/core";
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ReactiveFormsModule } from "@angular/forms";
import { ProductsRoutingModule } from "./products.routing.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NgxDropzoneModule,
    FontAwesomeModule
  ],
  declarations: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  exports: [
    ProductFormComponent,
    ProductListComponent,
    ProductDetailsComponent
  ]
}) 
export class ProductsModule {}