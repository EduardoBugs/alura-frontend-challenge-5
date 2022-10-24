import { Component, OnInit } from '@angular/core';
import { Galeria } from '@types';
import { Observable } from 'rxjs';
import { Categoria } from '../core/categoria/categoria.interface';
import { CategoriaService } from '../core/categoria/categoria.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  galerias: Galeria[] = [];

  categorias$: Observable<Categoria[]>|null = null;

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit(): void {
    this.categorias$ = this.categoriaService.list();
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
