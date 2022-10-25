import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/core/produto/produto.interface';

@Component({
  selector: 'app-categoria-produto',
  templateUrl: './categoria-produto.component.html',
  styleUrls: ['./categoria-produto.component.scss']
})
export class CategoriaProdutoComponent {
  @Input() produto!: Produto;

  constructor(private router: Router) { }

  get precoProduto() {
    if (!Number.isNaN(this.produto.price)) {
      return this.produto.price ? this.produto.price / 100 : 0;
    } else {
      return 0;
    }
  }

  detalhesProduto() {
    this.router.navigate(['products', this.produto.id]);
  }

}
