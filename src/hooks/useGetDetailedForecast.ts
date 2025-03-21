import { getLongDate } from "../utils/dateUtils";
import { useGetForecast } from "./useGetForecast";

export const useGetDetailedForecast = (city: string) => {
  const { data, isPending } = useGetForecast(city);

  let detailedForecast: { date: string; data: any }[] = [];

  if (!data?.list) return { detailedForecast, isPending };

  let cityName: string = data.city.name;

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

  return { cityName, timezoneOffset, detailedForecast, isPending };
};
