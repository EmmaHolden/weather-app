import { getLocalHour, getShortDay } from "../utils/dateUtils";
import { useGetForecast } from "./useGetForecast";

export const useGetFiveDayForecast = (lat: number, lon: number) => {
  const { data, isPending } = useGetForecast(lat, lon);

  let fiveDayForecast: {
    date: string;
    low: number;
    high: number;
    icon: string;
  }[] = [];

  if (!data?.list) return { fiveDayForecast, isPending };

  const timezoneOffset = data.city.timezone;

  for (let timestamp of data.list) {
    let date = getShortDay(timestamp.dt, timezoneOffset);
    const localHour = getLocalHour(timestamp.dt, timezoneOffset);
    const currentTemp = timestamp.main.temp;
    const currentIcon = timestamp.weather[0].icon;

    let dateInArray = fiveDayForecast.find((day) => day.date === date);

    if (!dateInArray) {
      fiveDayForecast.push({
        date: date,
        low: Math.round(currentTemp),
        high: Math.round(currentTemp),
        icon: currentIcon,
      });
    } else {
      dateInArray.low = Math.round(Math.min(dateInArray.low, currentTemp));
      dateInArray.high = Math.round(Math.max(dateInArray.high, currentTemp));
      if ([11, 12, 13].includes(localHour)) {
        dateInArray.icon = currentIcon;
      }
    }
  }

  if (fiveDayForecast.length > 5) {
    fiveDayForecast = fiveDayForecast.slice(1);
  }

  return { fiveDayForecast, isPending };
};
