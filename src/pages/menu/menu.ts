import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ToastController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';
import { SettingsPage } from '../settings/settings';
import { LoginPage } from '../login/login';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage : any;
  donnee : any;
  members : any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private weather: WeatherProvider,
    private storage: Storage,
    private appCtrl: App) {
    this.rootPage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  ionViewWillEnter() {
    this.storage.get('session_storage').then((res)=>{
      this.donnee = res;
      this.load();
    });
  }
  load(){
    let body = {
      id: this.donnee.id,
      aki: 'profile'
    };

    this.weather.postData(body, 'connex.php').subscribe((data)=>{
      this.members = data.profiles;
    });

  }
  openSettings(){
    this.navCtrl.push(SettingsPage);
  }
  logout(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
    const toast = this.toastCtrl.create({
      message: 'Déconnexion réussie',
      duration: 3000
    });
    toast.present();
  }
}
