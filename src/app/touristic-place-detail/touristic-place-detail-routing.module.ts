import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TouristicPlaceDetailPage } from './touristic-place-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TouristicPlaceDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TouristicPlaceDetailPageRoutingModule {}
