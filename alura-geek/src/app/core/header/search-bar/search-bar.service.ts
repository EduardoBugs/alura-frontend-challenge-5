import { BehaviorSubject, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { SearchBar } from './search-bar.interface';

@Injectable({ providedIn: 'root' })
export class SearchBarService {
  private searchData = new BehaviorSubject<SearchBar>({ filtro: '' });

  constructor() {}

  setFiltro(filtro: string | undefined): void {
    console.log(filtro);
    this.searchData.next({ filtro: filtro });
  }

  getFiltro(): Observable<SearchBar> {
    return this.searchData.asObservable();
  }
}
