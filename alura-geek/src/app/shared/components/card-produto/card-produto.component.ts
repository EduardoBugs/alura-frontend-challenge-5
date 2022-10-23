import { Component, Input } from '@angular/core';
import { Produto } from '@types';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent {
  @Input() produto: Produto = {};
}
