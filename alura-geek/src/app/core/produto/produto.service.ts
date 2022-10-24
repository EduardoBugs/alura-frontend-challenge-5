import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Produto } from './produto.interface';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  constructor(private http: HttpClient) {}

  listPaginated(page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Produto[]>(API + '/produtos', { params });
  }

  listByCategory(idCategoria: number) {
    const params = new HttpParams().append('limit', "6");
    return this.http.get<Produto[]>(API + '/categorias/' + idCategoria, { params });
  }
}
