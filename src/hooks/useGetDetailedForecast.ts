import { getLongDate } from "../utils/dateUtils";
import { useGetForecast } from "./useGetForecast";

export const useGetDetailedForecast = (lat: number, lon: number) => {
  const { data, isPending } = useGetForecast(lat, lon);

  let detailedForecast: { date: string; data: any }[] = [];

  if (!data?.list) return { detailedForecast, isPending };

  let cityName: string = data.city.name;

  let countryCode: string = data.city.country;

  const timezoneOffset: number = data.city.timezone;

  for (let timestamp of data.list) {
    let date = getLongDate(timestamp.dt, timezoneOffset);

    let dateInArray = detailedForecast.find((day) => day.date === date);

    if (!dateInArray) {
      detailedForecast.push({
        date: date,
        data: [timestamp],
      });
    } else {
      dateInArray.data.push(timestamp);
    }
  }

  return { cityName, countryCode, timezoneOffset, detailedForecast, isPending };
};
