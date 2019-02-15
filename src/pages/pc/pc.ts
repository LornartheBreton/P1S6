import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ItemPage } from '../item/item';
/**
 * Generated class for the PcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pc',
  templateUrl: 'pc.html',
})
export class PcPage {
  pcs=[];
  itemPage=ItemPage;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("counter_map")) {
            console.log(data.counter_map.all);
          }
          if (data.hasOwnProperty("list_ads")) {
            this.pcs = data.list_ads;
            //console.log("yes");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });
  }

  viewItem(c: any) {
    this.navCtrl.push(this.itemPage, { item: c })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PcPage');
  }

}
