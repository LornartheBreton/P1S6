import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JobsPage } from '../jobs/jobs';
import { PcPage } from '../pc/pc';
import { ItemPage } from '../item/item';
import { SearchPage } from '../search/search';
import { FavoritesPage } from '../favorites/favorites';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1=HomePage;
  tab2=JobsPage;
  tab3=PcPage;
  tab4=SearchPage;
  tab5=FavoritesPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
