import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  urlBase = 'https://api.mercadolibre.com/';

  constructor(
    private http: HttpClient,
  ) { }

  getItems(query: String) {
    return this.http.get(`${this.urlBase}sites/MLA/search?q=​${query}`);
  }

  getElement(itemId: String) {
    return this.http.get(`${this.urlBase}items/${itemId}`);
  }
}
