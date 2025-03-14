import { Component, inject, OnInit } from '@angular/core';
import { GeoLocationService } from '../../core/services/geo-location.service';
import { WeatherAPIService } from '../../core/services/weather-api.service';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../../core/models/weather.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-weather',
  imports: [DecimalPipe],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent implements OnInit {
  private geolocationService: GeoLocationService = inject(GeoLocationService);
  private weatherApiService: WeatherAPIService = inject(WeatherAPIService);
  private geocurrentPosition$: Observable<GeolocationPosition> =
    this.geolocationService.getCurrentPosition();
  private getCurrentWeather$!: Observable<WeatherResponse>;
  public temperatureCelsius: number = 0;
  public today_date: any;

  ngOnInit(): void {
    this.geocurrentPosition$.subscribe((position) => {
      this.getCurrentWeather$ = this.weatherApiService.getCurrentWeather(
        position.coords.latitude,
        position.coords.longitude
      );
      this.getCurrentWeather$.subscribe((data) => {
        this.temperatureCelsius = data.main.temp - 273.15;
      });
    });
    this.today_date = new Date()
      .toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit',
      })
      .replace(',', '');
  }
}
