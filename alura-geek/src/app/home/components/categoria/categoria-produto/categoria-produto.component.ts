import { Component, Input, OnInit } from '@angular/core';
import { Produto } from 'src/app/core/produto/produto.interface';

@Component({
  selector: 'app-categoria-produto',
  templateUrl: './categoria-produto.component.html',
  styleUrls: ['./categoria-produto.component.scss']
})
export class CategoriaProdutoComponent implements OnInit {
  @Input() produto!: Produto;

  constructor() { }

  ngOnInit(): void {
  }

}
