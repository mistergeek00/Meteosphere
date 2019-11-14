import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  cities: any[];
  textentrer = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    let localData = this.http.get('./assets/json/city.json').map(res => res.json());
    localData.subscribe(data => {
      this.cities = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  filtre( event ){
    this.textentrer = event.value;
  }

}
