import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home'

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
  city: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage) {
      this.storage.get('location').then((val) => {
        if(val != null){
          let location = JSON.parse(val);
          this.city = location.city;
        }else{
          this.city = 'Fianarantsoa';
        }
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  saveForm(){
    let location = {
      city: this.city
    }
    this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
