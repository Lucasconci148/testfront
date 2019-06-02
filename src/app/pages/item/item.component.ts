import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestService } from 'src/app/shared/services/test.services';
import { ItemDetail } from '../../shared/models/itemDetail.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public itemDetail: ItemDetail = new ItemDetail();
  public imageUrl: String = '';
  public lorem: String =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  constructor(
    private route: ActivatedRoute,
    private itemService: TestService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const itemId = params['id'];
      this.getData(itemId);
    });
  }

  getData(id: String) {
    this.itemService.getElement(id).subscribe( resp => {
      this.itemDetail = new ItemDetail(resp);
      this.imageUrl = resp['pictures'][0]['url'];
    });
  }
}
