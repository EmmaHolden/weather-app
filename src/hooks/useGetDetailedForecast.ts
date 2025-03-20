import { useGetForecast } from "./useGetForecast";

export const useGetDetailedForecast = (city: string) => {
  const { data, isPending } = useGetForecast(city);

  let detailedForecast: { date: string; data: any }[] = [];

  if (!data?.list) return { detailedForecast, isPending };

  let cityName: string = data.city.name;

  for (let timestamp of data.list) {
    let date = new Date(timestamp.dt_txt).toLocaleDateString("en-GB", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

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

  if (detailedForecast.length > 5) {
    detailedForecast = detailedForecast.slice(1);
  }

  return { cityName, detailedForecast, isPending };
};
