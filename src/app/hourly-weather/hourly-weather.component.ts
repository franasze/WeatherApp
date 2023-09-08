import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {WeatherServiceService} from "../service/weather-service.service";


export interface WeatherStatistic {
  time: Date;
  temperature: number;
  rain: number;
  windspeed: number;
}

let ELEMENT_DATA_FIRST: WeatherStatistic[] = [];

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent implements OnInit {
  myData: any;
  forecast: Record<string, any> ={}
  dataSourceFirst: WeatherStatistic[] = [];

  constructor(private weatherService: WeatherServiceService) {
  }

  ngOnInit(): void {
    this.myData = this.weatherService
      .getData()
      .subscribe((data) => {
        this.myData = data

        let times: Date = this.myData['hourly']['time'];
        let temperatures: any = this.myData['hourly']['temperature_2m'];
        let windspeeds: any = this.myData['hourly']['windspeed_10m'];
        let rains: any = this.myData['hourly']['rain'];


        this.forecast['times'] = times;
        this.forecast['temperatures'] = temperatures;
        this.forecast['windspeeds'] = windspeeds;
        this.forecast['rains'] = rains;

        this.forecast['formattedDate'] = this.weatherService.getFormattedDate();





        for (let i = 0; i < this.forecast['times'].length; i++) {
          const currentDate = this.weatherService.getTodayDate();
          const forecastTime = this.forecast['times'][i];
          const forecastData = { // 1.
            time: forecastTime,
            temperature: this.forecast['temperatures'][i],
            rain: this.forecast['rains'][i],
            windspeed: this.forecast['windspeeds'][i],
            // relativehumiditys: this.forecast['relativehumiditys'][i],
          };

          switch (true) { // 2.
            case this.weatherService.checkTwoDates(currentDate, forecastTime): // 3.
              ELEMENT_DATA_FIRST.push(forecastData);
              break;

          }
        }
        this.dataSourceFirst = ELEMENT_DATA_FIRST;
      });
  }
  displayedColumns: string[] = [
    'time',
    'temperature',
    'rain',
    'windspeed',
  ];

}
