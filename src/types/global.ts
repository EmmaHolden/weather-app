export enum RoutePath {
  Home = "/",
  DetailedForecast = "/detailed-forecast",
  ServerError = "/server-error",
}

export const TIMEZONE_OFFSET_MULTIPLIER = 1000;

export type WeatherStatName =
  | "humidity"
  | "feelsLike"
  | "pressure"
  | "windSpeed"
  | "sunrise"
  | "sunset";

export type WeatherCategory =
  | "Thunderstorm"
  | "Rain"
  | "Drizzle"
  | "Clear"
  | "Snow"
  | "Clouds"
  | "Atmosphere";

export type WeatherStatDetail = {
  description: string;
  imagePath: string;
  unit?: string;
};

export type Suggestion = {
  name: string;
  state?: string;
  country: string;
  lat: number;
  lon: number;
};

export const WeatherStatInfo: Record<WeatherStatName, WeatherStatDetail> = {
  humidity: {
    description: "Humidity",
    imagePath: "../images/condition-icons/humidity.png",
    unit: "%",
  },
  feelsLike: {
    description: "Feels Like",
    imagePath: "../images/condition-icons/thermometer.png",
    unit: "°C",
  },
  pressure: {
    description: "Pressure",
    imagePath: "../images/condition-icons/pressure.png",
    unit: "hPa",
  },
  windSpeed: {
    description: "Wind Speed",
    imagePath: "../images/condition-icons/windSpeed.png",
    unit: "m/s",
  },
  sunrise: {
    description: "Sunrise",
    imagePath: "../images/condition-icons/sunrise.png",
  },
  sunset: {
    description: "Sunset",
    imagePath: "../images/condition-icons/sunset.png",
  },
};
