import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '/home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: [HomeComponent]
})

export class HomeRoutingModule { }
