import { useQuery } from "@tanstack/react-query";
import { getWeatherForecast } from "../services/weatherService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RoutePath } from "../types/global";

export const useGetForecast = (lat: number, lon: number) => {
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["weather-forecast", lat, lon],
    queryFn: () => getWeatherForecast(lat, lon),
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
