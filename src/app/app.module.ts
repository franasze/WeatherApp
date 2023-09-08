import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import {MaterialModule} from "./material/material.module";
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HourlyWeatherComponent,
    HomeComponent
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
