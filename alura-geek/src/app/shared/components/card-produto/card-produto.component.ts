import { Produto } from 'src/app/core/produto/produto.interface';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
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
