import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/items.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {

  @Input() data: SearchItem;

}
