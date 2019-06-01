import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchListComponent } from './search-list.component';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from 'src/app/shared/components/search-item/search-item.component';

const routes: Routes = [
    { path: '', component: SearchListComponent },
    { path: '/items', component: SearchListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [SearchListComponent, SearchItemComponent]
})

export class SearchRoutingModule { }
