import { Component, OnInit } from '@angular/core';
import { TestService } from '../../shared/services/test.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: TestService) { }

  ngOnInit() {
    this.service.getLastThreeTransactions().subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
