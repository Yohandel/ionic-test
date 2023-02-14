import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage  {

  @ViewChild(IonModal) modal: any
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = ''
  lastEmittedValue: string = 'Salida'

  constructor() {
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  onIonChange(ev: Event) {
    switch ((ev as RangeCustomEvent).detail.value) {
      case 0:
        this.lastEmittedValue = 'Salida'
        break;
      case 1:
        this.lastEmittedValue = 'La casa de mi abuela'
        break;
      case 2:
        this.lastEmittedValue = 'La casa de Maria'
        break;
      case 3:
        this.lastEmittedValue = 'La Playa'
        break;
      case 4:
        this.lastEmittedValue = 'Otra playa pero ma dura'
        break;
      case 5:
        this.lastEmittedValue = 'El hotel'
        break;
    
      default:
        break;
    }
  }

}
