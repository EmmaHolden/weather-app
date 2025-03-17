import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../services/weatherService";

export const useGetWeatherForecast = (city: string) => {
  const query = useQuery({
    queryKey: ["weather-forecast", city],
    queryFn: () => getWeatherForecast(city),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
