import { Produto } from 'src/app/core/produto/produto.interface';
import { ProdutoService } from 'src/app/core/produto/produto.service';
import { UserService } from 'src/app/core/user/user.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent {
  @Input() produto!: Produto;
  @Output() excluir: EventEmitter<Produto> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor(
    private router: Router,
    private userService: UserService,
    private produtoService: ProdutoService
  ) {}

  get precoProduto() {
    if (!Number.isNaN(this.produto.price)) {
      return this.produto.price ? this.produto.price / 100 : 0;
    } else {
      return 0;
    }
  }

  get isLogged() {
    return this.userService.isLogged();
  }

  detalhesProduto() {
    this.router.navigate(['products', this.produto.id]);
  }

  editarProduto() {
    this.router.navigate(['products', this.produto.id, 'edit']);
  }

  excluirProduto() {
    if (this.produto.id) {
      this.produtoService
        .excluirProduto(this.produto.id)
        .subscribe(() => this.excluir.emit(this.produto));
    }
  }
}
