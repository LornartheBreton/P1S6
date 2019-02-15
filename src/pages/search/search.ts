import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemPage } from '../item/item';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  itemPage=ItemPage;
  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: HttpClient) {
    
    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("counter_map")) {
            console.log(data.counter_map.all);
          }
          if (data.hasOwnProperty("list_ads")) {
            this.items = data.list_ads;
            //console.log("yes");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });
    
    this.http.get('/v1/klfst?&category=6020&lim=29&lang=es')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("counter_map")) {
            console.log(data.counter_map.all);
          }
          if (data.hasOwnProperty("list_ads")) {
            this.items = this.items.concat(data.list_ads);
            //console.log("yes");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });
    
    this.http.get('/v1/klfst?&category=5020&offset=1&lim=29&lang=es')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("counter_map")) {
            console.log(data.counter_map.all);
          }
          if (data.hasOwnProperty("list_ads")) {
            this.items = this.items.concat(data.list_ads);
            //console.log("yes");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });
    
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  getItems(ev) {
    console.log(ev.target.value);
    this.items = this.items.filter(item => {

      return item.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());

    });
    console.log(this.items.length);
  }

  viewItem(c:any){
    this.navCtrl.push(this.itemPage, {item: c})
  }

}
