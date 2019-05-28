import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-front';

  constructor( private _router: Router) {
  }

  goTo(a) {
    this._router.navigate([a]);
  }
}