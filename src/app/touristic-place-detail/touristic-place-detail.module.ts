import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristicPlaceDetailPageRoutingModule } from './touristic-place-detail-routing.module';

import { TouristicPlaceDetailPage } from './touristic-place-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristicPlaceDetailPageRoutingModule
  ],
  declarations: [TouristicPlaceDetailPage]
})
export class TouristicPlaceDetailPageModule {}
