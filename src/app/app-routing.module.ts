import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HourlyWeatherComponent} from "./hourly-weather/hourly-weather.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "hourly-weather",
     component: HourlyWeatherComponent
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
