import {Component, OnInit} from '@angular/core';

import {WeatherServiceService} from "../service/weather-service.service";


export interface WeatherStatistic {
  time: Date;
  temperature: number;
  rain: number;
  windspeed: number;
}

let ELEMENT_DATA: WeatherStatistic[] = [];

@Component({
  selector: 'app-hourly-weather-today',
  templateUrl: './hourly-weather-today.component.html',
  styleUrls: ['./hourly-weather-today.component.css']
})

export class HourlyWeatherTodayComponent implements OnInit {
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
        this.forecast['formattedDate'] = this.weatherService.getFormattedDate(0);

        for (let i = 0; i < this.forecast['times'].length; i++) {
          const forecastTime = this.forecast['times'][i];
          const forecastData = {
            time: forecastTime,
            temperature: this.forecast['temperatures'][i],
            rain: this.forecast['rains'][i],
            windspeed: this.forecast['windspeeds'][i],
          };

          if(this.weatherService.checkTwoDates(this.weatherService.getTodayDate(2), forecastTime)){
            ELEMENT_DATA.push(forecastData);
          }
        }
        this.dataSourceFirst = ELEMENT_DATA;
      });
  }
  displayedColumns: string[] = [
    'time',
    'temperature',
    'rain',
    'windspeed',
  ];

}
