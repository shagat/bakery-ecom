import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { ItemsComponent } from '../app/items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: ItemsComponent,
    children: [
      { path: '', component: ItemListComponent },
      { path: ':id', component: ItemDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
