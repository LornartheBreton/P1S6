import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the FavsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavsProvider {

  favs=[];

  constructor(public http: HttpClient,
    public toastCtrl: ToastController) {
    console.log('Hello FavsProvider Provider');
  }

  checkFav(i: any) {
    return this.favs.some(item => {
      return item.ad.subject == i.ad.subject &&
        item.ad.user.account.name == i.ad.user.account.name;
    });
  }

  addFav(i: any) {
    this.favs.push(i);
    const toast = this.toastCtrl.create({

      message: 'Articulo agregado a favoritos',
      duration: 3000,
      position: 'top'

    });
    toast.present();
  }

  getFav() {
    return this.favs;
  }

  removeFav(i: any) {
    let index = this.favs.findIndex(item => {
      return item.ad.subject == i.ad.subject &&
        item.ad.user.account.name == i.ad.user.account.name;
    });

    if (index > -1) {
      this.favs.splice(index, 1);
    }

    const toast = this.toastCtrl.create({

      message: 'Articulo eliminado de favoritos',
      duration: 3000,
      position: 'top'

    });
    toast.present();

  }

}
