import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/weatherService";

export const useGetCurrentWeather = (city: string) => {
  const query = useQuery({
    queryKey: ["current-weather", city],
    queryFn: () => getCurrentWeather(city),
    select: (data) => ({
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: Math.round(data.main.temp),
      feelsLike: Math.round(data.main.feels_like),
      humidity: data.main.humidity,
      wind_speed: Math.round(data.wind.speed),
      temp_min: Math.round(data.main.temp_min),
      temp_max: Math.round(data.main.temp_max),
      pressure: data.main.pressure,
    }),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
