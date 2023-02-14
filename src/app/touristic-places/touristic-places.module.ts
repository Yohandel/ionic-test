import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TouristicPlacesPageRoutingModule } from './touristic-places-routing.module';

import { TouristicPlacesPage } from './touristic-places.page';
import { PlacesFromComponent } from './places-from/places-from.component';
import { ToursFormComponent } from './tours-form/tours-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TouristicPlacesPageRoutingModule
  ],
  declarations: [TouristicPlacesPage, PlacesFromComponent, ToursFormComponent]
})
export class TouristicPlacesPageModule {}
