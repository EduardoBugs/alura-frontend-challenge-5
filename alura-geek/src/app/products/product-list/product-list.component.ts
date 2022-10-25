import { Observable } from 'rxjs';
import { Produto } from 'src/app/core/produto/produto.interface';
import { ProdutoService } from 'src/app/core/produto/produto.service';
import { UserService } from 'src/app/core/user/user.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  produtos$: Observable<Produto[]> | undefined;

  constructor(private produtoService: ProdutoService, private router: Router, private userService: UserService) { }

  get isLogged() {
    return this.userService.isLogged();
  }

  ngOnInit(): void {
    this.produtos$ = this.produtoService.list();
  }

  adicionarProduto() {
    this.router.navigate(['products', 'add']);
  }

}
