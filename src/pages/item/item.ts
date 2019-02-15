import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavsProvider } from '../../providers/favs/favs'

/**
 * Generated class for the ItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {
  item={};
  imgs=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavsProvider) {
    this.item = this.navParams.get('item');
    if (this.item.ad.hasOwnProperty('images')) {
      this.imgs = this.item.ad.images;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemPage');
  }

  favoritos(i: any) {
    this.fav.addFav(i);
  }

}
