import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Produto, UploadProduto } from './produto.interface';

const API = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ProdutoService {
  constructor(private http: HttpClient) {}

  listPaginated(page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Produto[]>(API + '/produtos', { params });
  }

  listByCategory(categoria: string) {
    const params = new HttpParams().append('limit', '6');
    return this.http.get<Produto[]>(API + '/categorias/' + categoria, {
      params,
    });
  }

  addProduct(name: string, category: string, price: string, description: string, file: File) {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('description', description);

    formData.append('imageFile', file);

    return this.http.post(API + '/produtos/upload', formData, {
      observe: 'events',
      reportProgress: true,
    });
  }
}
