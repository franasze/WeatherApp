import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyWeatherTodayComponent } from './hourly-weather-today.component';

describe('HourlyWeatherComponent', () => {
  let component: HourlyWeatherTodayComponent;
  let fixture: ComponentFixture<HourlyWeatherTodayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HourlyWeatherTodayComponent]
    });
    fixture = TestBed.createComponent(HourlyWeatherTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
