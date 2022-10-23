import { Component, OnInit } from '@angular/core';
import { Galeria } from '@types';
import { CategoriaService } from '../core/categoria/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  galerias: Galeria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categoriaService.list().subscribe(categorias => {
      console.log(categorias);
    })
  }

  get bannerTitle(): string {
    return 'Dezembro Promocional';
  }

  get bannerDescription(): string {
    return 'Produtos selecionados com 33% de desconto';
  }

  get buttonText(): string {
    return 'Ver consoles';
  }
}
