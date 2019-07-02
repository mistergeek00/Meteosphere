import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  fullname : string = "";
  mail : string = "";
  secret : string = "";
  csecret : string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController,
    private weather: WeatherProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  login(){
    this.navCtrl.pop();
  }

  register(){
    console.log(this.fullname);
    if(this.fullname == ""){
        const toast = this.toastCtrl.create({
          message: 'Vous devez entrer votre nom complet',
          duration: 3000
        });
        toast.present();
    }else if(this.mail == ""){
        const toast = this.toastCtrl.create({
          message: 'Vous devez entrer votre email',
          duration: 3000
        });
        toast.present();
    }else if(this.secret == ""){
      const toast = this.toastCtrl.create({
        message: 'Vous devez entrer un mot de passe',
        duration: 3000
      });
      toast.present();
    }else if(this.secret != this.csecret){
      const toast = this.toastCtrl.create({
        message: 'Le mot de passe est invalide',
        duration: 3000
      });
      toast.present();
    }else{
      let body = {
        fullname : this.fullname,
        mail : this.mail,
        secret : this.secret,
        aki : 'add_register'
      };

      this.weather.postData(body, 'connex.php').subscribe((data)=>{
        var alert = data.msg;
        if(data.success){
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: 'Inscription réussie',
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
    }
  
  }


}
