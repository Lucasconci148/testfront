import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  url = 'https://api.mercadolibre.com/sites/MLA/search?q=​iphone';

  constructor(
    private http: HttpClient,
  ) { }

  getLastThreeTransactions() {
    return this.http.get<any>(this.url);
  }

}
