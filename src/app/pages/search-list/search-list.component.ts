import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from 'src/app/shared/models/items.model';
import { TestService } from 'src/app/shared/services/test.services';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html'
})
export class SearchListComponent implements OnInit {

  public resultItems: SearchItem[] = [];
  public count: Number = 0;

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private service: TestService
    ) {
   }

   ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.getListOfElements(4, params['search']);
    });
   }

   getListOfElements(items: Number, query: String) {
     this.service.getItems(query).subscribe(
       (res) => {
         for (let i = 0; i < items; i++) {
            const element = new SearchItem(res['results'][i]);
            this.resultItems.push(element);
         }
       });
   }

   goTo(itemdId: String) {
    this._router.navigate([`/item/${itemdId}`]);
   }
}
