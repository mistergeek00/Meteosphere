import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = '1629763d8ee23f61e21125e6594ddf40';
  url;
  server: string = "http://localhost/meteosphere/"; // Local
  //server: string = "https://meteosphere.000webhostapp.com/"; // Online

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?q';
  }

  getWeather(city){
    return this.http.get(this.url+'='+city+'&APPID='+this.apiKey+'&units=metric')
    .map(res => res.json());
  }

  postData(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({ 'Content-Type': type });
    let options = new RequestOptions({ headers : headers });

    return this.http.post(this.server + file, JSON.stringify(body), options)
    .map(res => res.json());
  }

}
