import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavsProvider } from '../../providers/favs/favs';
import { ItemPage } from '../item/item';
//import { ItemPage } from '../item/item';
/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favs=[];
  itemPage=ItemPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public fav: FavsProvider) {
      this.favs=this.fav.getFav();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

   viewItem(c:any) {
     this.navCtrl.push(this.itemPage,{item: c});

   }

}
