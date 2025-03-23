import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../services/weatherService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RoutePath } from "../types/global";

export const useGetForecast = (city: string) => {
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["weather-forecast", city],
    queryFn: () => getWeatherForecast(city),
    enabled: !!city,
    staleTime: 3600000,
  });

  useEffect(() => {
    if (query.isError) {
      navigate(RoutePath.ServerError);
    }
  }, [query.isError]);

  return query;
};
