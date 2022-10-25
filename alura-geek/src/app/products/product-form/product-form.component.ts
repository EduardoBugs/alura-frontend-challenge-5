import { ToastrService } from 'ngx-toastr';
import { ProdutoService } from 'src/app/core/produto/produto.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  faImage = faImage;

  productForm!: FormGroup;
  files: File[] = [];

  isMissingFile: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private produtoService: ProdutoService,
    private toastr: ToastrService
  ) {}

  get formControls() {
    return this.productForm.controls;
  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      categoria: [null, [Validators.required, Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, [Validators.required, Validators.maxLength(150)]],
      price: [null, Validators.required],
    });
  }

  adicionarProduto() {
    this.isMissingFile = this.files.length === 0;

    if (this.productForm.valid) {
      if (!this.isMissingFile) {
        const price = Number(this.formControls['price'].value) * 100;
        
        this.produtoService
          .addProduct(
            this.formControls['name'].value,
            this.formControls['categoria'].value,
            price.toString(),
            this.formControls['description'].value,
            this.files[0]
          )
          .subscribe({
            error: (e) => {
              console.error(e);
              this.toastr.error('Erro ao cadastrar o produto');
            },
            complete: () => {
              this.toastr.success('Produto cadastrado com sucesso');
              this.productForm.reset();
              this.files = [];
            },
          });
      }
    } else {
      this.productForm.markAllAsTouched();
    }
  }

  onSelect(event: { addedFiles: any }) {
    if (this.files && this.files.length >= 2) {
      this.onRemove(this.files[0]);
    }
    this.files.push(...event.addedFiles);
    this.isMissingFile = false;
  }

  onRemove(event: File) {
    this.files.splice(this.files.indexOf(event), 1);
  }
}
