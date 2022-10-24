import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/core/categoria/categoria.interface';
import { Produto } from 'src/app/core/produto/produto.interface';
import { ProdutoService } from 'src/app/core/produto/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  @Input() categoria!: Categoria;

  produtos$: Observable<Produto[]> | null = null;

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos$ = this.produtoService.listByCategory(this.categoria.name);
  }
}
