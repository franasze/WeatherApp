import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourlyWeatherTodayComponent } from './hourly-weather-today/hourly-weather-today.component';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { HourlyWeatherTomorrowComponent } from './hourly-weather-tomorrow/hourly-weather-tomorrow.component';
import { HourlyWeatherDayAfterTomorrowComponent } from './hourly-weather-day-after-tomorrow/hourly-weather-day-after-tomorrow.component';

@NgModule({
  declarations: [
    AppComponent,
    HourlyWeatherTodayComponent,
    HomeComponent,
    HourlyWeatherTomorrowComponent,
    HourlyWeatherDayAfterTomorrowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
