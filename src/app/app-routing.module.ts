import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HourlyWeatherTodayComponent} from "./hourly-weather-today/hourly-weather-today.component";
import {HomeComponent} from "./home/home.component";
import {HourlyWeatherTomorrowComponent} from "./hourly-weather-tomorrow/hourly-weather-tomorrow.component";
import {HourlyWeatherDayAfterTomorrowComponent} from "./hourly-weather-day-after-tomorrow/hourly-weather-day-after-tomorrow.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hourly-weather-today",
    component: HourlyWeatherTodayComponent
  },
  {
    path: "hourly-weather-tomorrow",
    component: HourlyWeatherTomorrowComponent
  },
  {
    path: "hourly-weather-day-after-tomorrow",
    component: HourlyWeatherDayAfterTomorrowComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  providers: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
