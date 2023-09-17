import {Component, OnInit} from '@angular/core';
import {WeatherServiceService} from "../service/weather-service.service";

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
      // let daily: any = this.myData['daily']['time'];

      this.forecast['times'] = times;
      this.forecast['temperature'] = this.weatherService.getTemperature(times, temperatures, 0);
      this.forecast['temperatureTomorrow'] = this.weatherService.getTemperature(times, temperatures, 24);
      this.forecast['temperatureAfterTomorrow'] = this.weatherService.getTemperature(times, temperatures, 48);
      this.forecast['currentDay'] = this.weatherService.getTodayDay();
      this.forecast['formattedDate'] = this.weatherService.getFormattedDate(0);
    });
  }
}
