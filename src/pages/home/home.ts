import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

import moment from 'moment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  location:{
    city: string
  }
  
  constructor(
    public navCtrl: NavController, 
    private weatherProvider: WeatherProvider,
    private storage : Storage) {
     
  }


  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          city: 'Fianarantsoa'
        }
      }

      this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
        this.weather = weather;
      });
    });
  }

    windDirection = (deg) => {
      if (deg > 11.25 && deg < 33.75){
        return "NNE";
      }else if (deg > 33.75 && deg < 56.25){
        return "ENE";
      }else if (deg > 56.25 && deg < 78.75){
        return "E";
      }else if (deg > 78.75 && deg < 101.25){
        return "ESE";
      }else if (deg > 101.25 && deg < 123.75){
        return "ESE";
      }else if (deg > 123.75 && deg < 146.25){
        return "SE";
      }else if (deg > 146.25 && deg < 168.75){
        return "SSE";
      }else if (deg > 168.75 && deg < 191.25){
        return "S";
      }else if (deg > 191.25 && deg < 213.75){
        return "SSW";
      }else if (deg > 213.75 && deg < 236.25){
        return "SW";
      }else if (deg > 236.25 && deg < 258.75){
        return "WSW";
      }else if (deg > 258.75 && deg < 281.25){
        return "W";
      }else if (deg > 281.25 && deg < 303.75){
        return "WNW";
      }else if (deg > 303.75 && deg < 326.25){
        return "NW";
      }else if (deg > 326.25 && deg < 348.75){
        return "NNW";
      }else{
        return "N"; 
      }
    }
    traduction = (des) => {
      des = String(des);
      if(des == "clear sky"){
        return "Ciel clair";
      }else if (des == "few clouds"){
        return "Quelques nuages";
      }else if (des == "scattered clouds"){
        return "Nuages ​​dispersés";
      }else if (des == "broken clouds"){
        return "Nuages ​​brisés";
      }else if (des == "shower rain"){
        return "Douche pluie";
      }else if (des == "rain"){
        return "Pluie";
      }else if (des == "thunderstorm"){
        return "Orage";
      }else if (des == "snow"){
        return "Neige";
      }else if (des == "mist"){
        return "Brouillard";
      }else if (des == "thunderstorm with light rain"){
        return "Orage avec pluie légère";
      }else if (des == "thunderstorm with rain"){
        return "Orage avec pluie";
      }else if (des == "thunderstorm with heavy rain"){
        return "Orage avec fortes pluies";
      }else if (des == "light thunderstorm"){
        return "Orage léger";
      }else if (des == "thunderstorm"){
        return "Orage";
      }else if (des == "heavy thunderstorm"){
        return "Orage violent";
      }else if (des == "ragged thunderstorm"){
        return "Orage déchiqueté";
      }else if (des == "thunderstorm with light drizzle"){
        return "Orage avec bruine légère";
      }else if (des == "thunderstorm with drizzle"){
        return "Orage avec bruine";
      }else if (des == "thunderstorm with heavy drizzle"){
        return "Orage avec bruine forte";
      }else if (des == "light intensity drizzle"){
        return "Bruine faible intensité";
      }else if (des == "drizzle"){
        return "Crachin";
      }else if (des == "heavy intensity drizzle"){
        return "Bruine forte et intense";
      }else if (des == "light intensity drizzle rain"){
        return "Pluie de bruine légère d'intensité légère";
      }else if (des == "drizzle rain"){
        return "Pluie de bruine";
      }else if (des == "heavy intensity drizzle rain"){
        return "Pluie de bruine forte d'intensité";
      }else if (des == "shower rain and drizzle"){
        return "Pluie et bruine de pluie";
      }else if (des == "heavy shower rain and drizzle"){
        return "Pluies diluviennes et bruine abondante";
      }else if (des == "shower drizzle"){
        return "Bruine de pluie";
      }else if (des == "light rain"){
        return "Pluie fine";
      }else if (des == "moderate rain"){
        return "Pluie modérée";
      }else if (des == "heavy intensity rain"){
        return "Fortes pluies d'intensité";
      }else if (des == "very heavy rain"){
        return "Très fortes pluies";
      }else if (des == "extreme rain"){
        return "Pluies diluviennes";
      }else if (des == "freezing rain"){
        return "Pluie verglaçante";
      }else if (des == "light intensity shower rain"){
        return "Pluie de douche d'intensité légère";
      }else if (des == "shower rain"){
        return "Douche pluie";
      }else if (des == "heavy intensity shower rain"){
        return "Pluie de pluie d'une forte intensité";
      }else if (des == "ragged shower rain"){
        return "Pluie battante";
      }else if (des == "light snow"){
        return "Neige légère";
      }else if (des == "Snow"){
        return "Neige";
      }else if (des == "Heavy snow"){
        return "Neige abondante";
      }else if (des == "Sleet"){
        return "Sleet";
      }else if (des == "Light shower sleet"){
        return "Pomme de douche légère";
      }else if (des == "Shower sleet"){
        return "Grésil de douche";
      }else if (des == "Light rain and snow"){
        return "Pluie et neige légères";
      }else if (des == "Rain and snow"){
        return "Pluie et neige";
      }else if (des == "Light shower snow"){
        return "Douche légère neige";
      }else if (des == "Shower snow"){
        return "Douche de neige";
      }else if (des == "Heavy shower snow"){
        return "Pluie de neige abondante sous la douche";
      }else if (des == "mist"){
        return "Brouillard";
      }else if (des == "Smoke"){
        return "Fumée";
      }else if (des == "Haze"){
        return "Brume";
      }else if (des == "sand/ dust whirls"){
        return "tourbillons de sable / poussière";
      }else if (des == "fog"){
        return "brouillard";
      }else if (des == "sand"){
        return "Sable";
      }else if (des == "dust"){
        return "Poussière";
      }else if (des == "volcanic ash"){
        return "Cendre volcanique";
      }else if (des == "squalls"){
        return "Des grains";
      }else if (des == "tornado"){
        return "Tornade";
      }else if (des == "clear sky"){
        return "Ciel clair";
      }else if (des == "few clouds: 11-25%"){
        return "Quelques nuages : 11-25%";
      }else if (des == "scattered clouds: 25-50%"){
        return "Nuages épars : 25 à 50%";
      }else if (des == "broken clouds: 51-84%"){
        return "Nuages fragmentés : 51-84";
      }else{
        return "Nuages couverts : 85-100%";
      }
    }
    GetDay = (times: number) => {
      let day = new Date(times*1000).toISOString();

      let d = new Date(day);

      let weekday = [];
      weekday[0] = "Dim";
      weekday[1] = "Lun";
      weekday[2] = "Mar";
      weekday[3] = "Mer";
      weekday[4] = "Jeu";
      weekday[5] = "Ven";
      weekday[6] = "Sam";

      let month = [];
      month[0] = "Jan";
      month[1] = "Fev";
      month[2] = "Mar";
      month[3] = "Avr";
      month[4] = "Mai";
      month[5] = "Juin";
      month[6] = "Jul";
      month[7] = "Aout";
      month[8] = "Sept";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
    
      let nameday = weekday[d.getDay()];
      let day2 = moment(times*1000).format("DD");
      let namemonth = month[d.getMonth()];
      let fulldate = nameday + " " + day2 + " " + namemonth + " " + d.getFullYear() + "\n" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      return fulldate;
  }
}
