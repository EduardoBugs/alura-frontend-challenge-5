import { filter, map, Observable } from 'rxjs';
import { Produto } from 'src/app/core/produto/produto.interface';
import { ProdutoService } from 'src/app/core/produto/produto.service';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  @Input() nomeCategoria: string | undefined;
  @Input() title: string | undefined;
  @Input() linkVerTudo: boolean = true;
  @Input() excludeId: number | undefined = 0;

  produtos$: Observable<Produto[]> | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    if (this.nomeCategoria) {
      this.produtos$ = this.produtoService
        .listByCategory(this.nomeCategoria)
        .pipe(
          map((produtos) => produtos.filter((x) => x.id != this.excludeId))
        );
    }
  }
}