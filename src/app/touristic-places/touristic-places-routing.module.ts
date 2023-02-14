import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristicPlacesPage } from './touristic-places.page';

const routes: Routes = [
  {
    path: '',
    component: TouristicPlacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristicPlacesPageRoutingModule {}
