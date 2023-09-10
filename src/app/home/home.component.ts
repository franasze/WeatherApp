import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from "../service/weather-service.service";
import {Data} from "@angular/router";
import {getLocaleDateFormat} from "@angular/common";

export interface WeatherStatistic {
  time: Date;
  temperature: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit{
  myData: any;
  forecast: Record<string, any> = {  tomorrowWeather: null,
    afterTomorrowWeather: null};

  constructor(private weatherService: WeatherServiceService) {}

  ngOnInit(): void {
    this.myData = this.weatherService.getData().subscribe((data) => {
      this.myData = data;

      let times: any = this.myData['hourly']['time'];
      let temperatures: any = this.myData['hourly']['temperature_2m'];
      // let windspeeds: any = this.myData['hourly']['windspeed_10m'];
      // let rains: any = this.myData['hourly']['rain'];
      // let relativehumiditys: any = this.myData['hourly']['relativehumidity_2m'];
      let daily: any = this.myData['daily']['time'];
      // let code: any = this.myData['daily']['weathercode'];


      this.forecast['times'] = times;
      this.forecast['temperature'] = this.weatherService.getTemperature(times, temperatures, 0);
      // this.forecast['windspeeds'] = windspeeds;
      // this.forecast['rains'] = rains;
      // this.forecast['relativehumiditys'] = relativehumiditys;
      this.forecast['temperatureTomorrow'] = this.weatherService.getTemperature(times, temperatures, 24);
      this.forecast['temperatureAfterTomorrow'] = this.weatherService.getTemperature(times, temperatures, 48);
      // this.forecast['currentWeather'] = this.weatherService.getDailyWeather(daily, code, 0);
      // this.forecast['tomorrowWeather'] = this.weatherService.getDailyWeather(daily, code, 1);
      // this.forecast['afterTomorrowWeather'] = this.weatherService.getDailyWeather(daily, code, 2);

      this.forecast['currentDay'] = this.weatherService.getTodayDay();
      this.forecast['formattedDate'] = this.weatherService.getFormattedDate(0);
    });
  }

}
