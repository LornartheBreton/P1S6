import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  games=[];

  constructor(public navCtrl: NavController,
    public http: HttpClient) {

    this.http.get('/v1/klfst?&category=5060&offset=1&lim=29&lang=es')
      .subscribe(
        data => {
          //console.log(JSON.stringify(data));
          if (data.hasOwnProperty("counter_map")) {
            console.log(data.counter_map.all);
          }
          if (data.hasOwnProperty("list_ads")) {
            this.games = data.list_ads;
            //console.log("yes");
          }
        },
        error => {
          console.log(JSON.stringify(error));
        });

  }

}
