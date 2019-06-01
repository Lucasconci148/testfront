import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public query: String = '';

  constructor(
    private _router: Router,
    ) { }

  buscar() {
    const url  = `/items?search=${this.query}`;
    this._router.navigate(['/items'], { queryParams: { search: this.query }});
  }
}
