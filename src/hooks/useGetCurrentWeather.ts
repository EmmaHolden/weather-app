import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/weatherService";

export const useGetCurrentWeather = (city: string) => {
  const query = useQuery({
    queryKey: ["current-weather", city],
    queryFn: () => getCurrentWeather(city),
    select: (data) => ({
      cityName: data.name,
      main: data.weather[0].main,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      windSpeed: Math.round(data.wind.speed),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      pressure: data.main.pressure,
    }),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
