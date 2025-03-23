import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { RoutePath } from "../types/global";
import { getCitySuggestions } from "../services/geocodeService";

export const useGetCitySuggestions = (city: string) => {
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["city-suggestions", city],
    queryFn: () => getCitySuggestions(city),
    enabled: !!city && city.length > 2,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (query.isError) {
      navigate(RoutePath.ServerError);
    }
  }, [query.isError]);

  return query;
};
