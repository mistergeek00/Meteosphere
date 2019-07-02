import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

import { SignupPage } from '../signup/signup';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  mail: string = ""
  secret: string = ""

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private weather: WeatherProvider,
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }

  login(){
    if(this.mail != "" && this.secret != ""){
      let body = {
        mail: this.mail,
        secret: this.secret,
        aki: 'login'
      };

      this.weather.postData(body, 'connex.php').subscribe((data)=>{
        var alert = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(MenuPage);
          const toast = this.toastCtrl.create({
            message: 'Connexion réussie',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alert,
            duration: 3000
          });
          toast.present();
        }

      });

    }else{
      const toast = this.toastCtrl.create({
        message: 'Email ou Mot de passe invalide',
        duration: 3000
      });
      toast.present();
    }
  }

}
