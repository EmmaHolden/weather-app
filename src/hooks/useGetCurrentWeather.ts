import { useQuery } from "@tanstack/react-query";
import { getCurrentWeather } from "../services/weatherService";

export const useGetCurrentWeather = (city: string) => {
  const query = useQuery({
    queryKey: ["current-weather", city],
    queryFn: () => getCurrentWeather(city),
    enabled: !!city,
    staleTime: Infinity,
  });
  return query;
};
