// Interface for the 'coord' property
export interface Coord {
  lon: number;
  lat: number;
}

// Interface for the 'weather' array elements
export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

// Interface for the 'main' property
export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

// Interface for the 'wind' property
export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

// Interface for the 'clouds' property
export interface Clouds {
  all: number;
}

// Interface for the 'sys' property
export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// Interface for the main response
export interface WeatherResponse {
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
