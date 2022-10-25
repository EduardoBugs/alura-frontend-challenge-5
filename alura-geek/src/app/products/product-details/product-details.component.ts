import { filter, map, Observable, switchMap } from 'rxjs';
import { Produto } from 'src/app/core/produto/produto.interface';
import { ProdutoService } from 'src/app/core/produto/produto.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Produto> | undefined;

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService
  ) {}

  precoProduto(price: number | undefined): number {
    if (price) {
      if (!Number.isNaN(price)) {
        return Number(price) / 100;
      }
    }

    return 0;
  }

  ngOnInit(): void {
    this.product$ = this.route.params.pipe(
      map((params) => Number(params['idProduto'])),
      filter((idProduto) => !Number.isNaN(idProduto)),
      switchMap((idProduto: number) => {
        return this.produtoService.findById(idProduto);
      })
    );
  }
}
