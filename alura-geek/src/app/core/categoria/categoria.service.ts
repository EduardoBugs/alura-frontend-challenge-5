import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.interface';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class CategoriaService {
  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Categoria[]>(API + '/categorias');
  }
}
