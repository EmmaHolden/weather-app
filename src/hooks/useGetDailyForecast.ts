import { useGetForecast } from "./useGetForecast";

export const useGetDailyForecast = (city: string) => {
  const { data, isPending } = useGetForecast(city);

  let dailyForecast: {
    date: string;
    low: number;
    high: number;
    icon: string;
  }[] = [];

  if (!data?.list) return { dailyForecast, isPending };

  for (let timestamp of data.list) {
    let date = new Date(timestamp.dt_txt).toLocaleDateString("en-GB", {
      weekday: "short",
    });
    const time = timestamp.dt_txt.split(" ")[1];
    const currentTemp = timestamp.main.temp;
    const currentIcon = timestamp.weather[0].icon;

    let dateInArray = dailyForecast.find((day) => day.date === date);

    if (!dateInArray) {
      dailyForecast.push({
        date: date,
        low: Math.round(currentTemp),
        high: Math.round(currentTemp),
        icon: currentIcon,
      });
    } else {
      dateInArray.low = Math.round(Math.min(dateInArray.low, currentTemp));
      dateInArray.high = Math.round(Math.max(dateInArray.high, currentTemp));
      if (time === "12:00:00") {
        dateInArray.icon = currentIcon;
      }
    }
  }

  if (dailyForecast.length > 5) {
    dailyForecast = dailyForecast.slice(1);
  }

  return { dailyForecast, isPending };
};
