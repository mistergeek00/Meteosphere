import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  donnee: any;
  fullname: string;
  mail: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private weather: WeatherProvider,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    this.storage.get('session_storage').then((res)=>{
      this.donnee = res;
      this.fullname = this.donnee.fullname;
      this.mail = this.donnee.mail;
    });
  }

  selectText(event): void{
    event.target.select();
  }

  saveChange(){
    let body = {
      fullname: this.fullname,
      mail: this.mail,
      id: this.donnee.id,
      aki: 'update_profile'
    };

    this.weather.postData(body, 'connex.php').subscribe((data)=>{
      this.donnee.fullname = this.fullname;
      this.donnee.mail = this.mail;
      this.storage.set('session_storage', this.donnee);
      this.navCtrl.pop();
      const toast = this.toastCtrl.create({
        message: 'Paramètre sauvegardé',
        duration: 3000
      });
      toast.present();
    });
    
  }

}
