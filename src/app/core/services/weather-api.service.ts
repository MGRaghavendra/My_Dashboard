import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherAPIService {
  private httpClient: HttpClient = inject(HttpClient);
  private OPEN_WEATHER_API_KEY = '339e04ec04df645690958c98401c104c';
  private API = `https://api.openweathermap.org/data/2.5/`;

  getCurrentWeather(
    latitude: number,
    longitude: number
  ): Observable<WeatherResponse> {
    let api_url = `${this.API}weather?lat=${latitude}&lon=${longitude}&appid=${this.OPEN_WEATHER_API_KEY}`;
    return this.httpClient.get<WeatherResponse>(api_url);
  }
}
