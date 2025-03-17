import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/weatherService";

export const useGetCurrentWeather = (city: string) => {
  const query = useQuery({
    queryKey: ["current-weather", city],
    queryFn: () => getCurrentWeather(city),
    select: (data) => ({
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temperature: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
    }),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
