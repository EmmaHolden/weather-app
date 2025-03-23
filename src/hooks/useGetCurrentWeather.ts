import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/weatherService";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../types/global";
import { useEffect } from "react";

export const useGetCurrentWeather = (lat: number, lon: number) => {
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["current-weather", lat, lon],
    queryFn: () => getCurrentWeather(lat, lon),
    select: (data) => ({
      date: data.dt,
      cityName: data.name,
      countryCode: data.sys.country,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      pressure: data.main.pressure,
      visibility: Math.round(data.visibility / 1000),
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      timezone: data.timezone,
    }),
    enabled: !!lat && !!lon,
    staleTime: 3600000,
  });

  useEffect(() => {
    if (query.isError) {
      navigate(RoutePath.ServerError);
    }
  }, [query.isError]);

  return query;
};
