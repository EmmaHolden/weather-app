import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/weatherService";

export const useGetCurrentWeather = (city: string) => {
  const query = useQuery({
    queryKey: ["current-weather", city],
    queryFn: () => getWeather(city),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
