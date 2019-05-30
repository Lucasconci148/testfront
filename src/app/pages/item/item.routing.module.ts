import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { CommonModule } from '@angular/common';
import { PrimaryBtnComponent } from 'src/app/shared/components/primary-btn/primary-btn.component';

const routes: Routes = [
    { path: '', component: ItemComponent },
    { path: '/item', component: ItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [ItemComponent, PrimaryBtnComponent]
})

export class ItemRoutingModule { }
