import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-touristic-places',
  templateUrl: './touristic-places.page.html',
  styleUrls: ['./touristic-places.page.scss'],
})
export class TouristicPlacesPage implements OnInit {

  route: string = 'Places'
  @ViewChild(IonModal) modal:any

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  cancel(){
    this.modal.dismiss(null, 'cancel')
  }

  confirm(){
    this.modal.dismiss(null, 'confirm')
    this.presentToast('top')
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
      color: 'success'
    });

    await toast.present();
  }

  onWillDismiss(event: Event) {
    
  }

}
